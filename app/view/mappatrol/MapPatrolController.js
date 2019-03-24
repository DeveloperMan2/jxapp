/**
 * Created by winnerlbm on 2019/3/24.
 */
let mp = {
    v: {
        isShowPlanXcPath: false,//是否显示预设巡查路线
        xcPath: null,//实际巡查路线
        xcPlanPath: null,//预设巡查路线
        markerGroup: null,
        markerPlanGroup: null,
        //------------轨迹回放相关-----------------------
        trackMarker: null,
        curTrackPoint: null,
        preTrackPoint: null,
        nextTrackPoint: null,
        _intervalFlag: null
        //---------------------------------------------
    },
    fn: {
        //获取两点之间的距离
        getDistance: function (pxA, pxB) {
            let f1 = pxA.y, l1 = pxA.x, f2 = pxB.y,
                l2 = pxB.x;
            let toRadian = Math.PI / 180;
            let R = 6371; //地球半径，单位：千米
            let deltaF = (f2 - f1) * toRadian;
            let deltaL = (l2 - l1) * toRadian;
            let a = Math.sin(deltaF / 2) * Math.sin(deltaF / 2) + Math.cos(f1 * toRadian) * Math.cos(f2 * toRadian) * Math.sin(deltaL / 2) * Math.sin(deltaL / 2);
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            let distance = R * c;
            return distance * 1000;//返回米制数据
        },
        crateTrackPoint: function (nodes) {
            if (nodes) {
                if (mp.v.trackMarker) {
                    mp.v.trackMarker.remove();
                }

                let path = [];
                Ext.each(nodes, function (node) {
                    if (node != null) {
                        let seg = [node['y'], node['x']];
                        path.push(seg);
                    }
                });

                if (path) {
                    mp.v.trackMarker = L.Marker.movingMarker(path, 10000, {
                        //icon: trackIcon,
                        icon: L.AwesomeMarkers.icon({
                            icon: 'spinner',
                            prefix: 'fa',
                            markerColor: 'red',
                            spin: true
                        }),
                        draggable: false,
                        title: ''
                    }).addTo(conf.map.instance).bindTooltip('巡查中...', {
                        permanent: true,
                        offset: [0, 0],// 偏移
                        direction: "right",// 放置位置
                        //sticky:true,//是否标记在点上面
                        className: 'red-anim-tooltip'// CSS控制
                    }).openTooltip();

                    mp.v.trackMarker.start();

                    mp.v.trackMarker.on('end', function () {
                        mp.v.trackMarker.remove();
                        mp.v.trackMarker = null;
                    });

                }
            }
        },
        startTrack: function (data) {
            let nodes = data['path'];
            if (mp.v.trackMarker) {
                if (mp.v.trackMarker.isPaused()) {
                    mp.v.trackMarker.resume();
                } else {
                    mp.fn.crateTrackPoint(nodes);
                }
            } else {
                mp.fn.crateTrackPoint(nodes);
            }
        },
        pauseTrack: function () {
            if (mp.v.trackMarker) {
                mp.v.trackMarker.pause();
            }
        },
        stopTrack: function () {
            if (mp.v.trackMarker) {
                mp.v.trackMarker.stop();
            }
        }
    }
};

Ext.define('jxapp.view.mappatrol.MapPatrolController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mappatrol',

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onPlayHandler: function (gp, rowIndex, colIndex, btn, timeStamp) {
        let curItem = gp.getStore().getAt(rowIndex);
        gp.getSelectionModel().select(curItem, true);
        let curData = curItem['data'];
        //开启巡查轨迹回放
        mp.fn.startTrack(curData);
    },
    onPauseHandler: function (gp, rowIndex, colIndex, btn, timeStamp) {
        let selItem = gp.selection.data;
        let curItem = gp.getStore().getAt(rowIndex).data;
        //只能在选中行执行操作
        if (selItem == curItem) {
            mp.fn.pauseTrack();
        }
    },
    onStopHandler: function (gp, rowIndex, colIndex, btn, timeStamp) {
        let selItem = gp.selection.data;
        let curItem = gp.getStore().getAt(rowIndex).data;
        //只能在选中行执行操作
        if (selItem == curItem) {
            mp.fn.stopTrack();
        }
    },
    gridAfterrenderHandler: function (gp, eOpts) {
        let params = {};

        function success(response) {
            let result = Ext.util.JSON.decode(response.responseText);
            if (result && result['data'] && result['data'].length > 0) {
                let gpStore = Ext.create('Ext.data.Store', {
                    data: result['data']
                });
                gp.setStore(gpStore);
            }
        }

        function failure(response) {

        }

        ajax.fn.execute(params, 'GET', 'resources/data/patral.json', success, failure);
    },
    selectHistoryLineHandler: function (gp, record, index, eOpts) {
        if (mp.v.xcPath) {
            mp.v.xcPath.remove();
            mp.v.xcPath = null;
        }

        if (mp.v.xcPlanPath) {
            mp.v.xcPlanPath.remove();
            mp.v.xcPlanPath = null;
        }

        if (mp.v.markerGroup) {
            mp.v.markerGroup.clearLayers();
        }

        if (mp.v.markerPlanGroup) {
            mp.v.markerPlanGroup.clearLayers();
        }

        //重点巡查点
        let markerIcon2 = L.icon({
            iconUrl: 'resources/images/jxapp/move/marker2.png',
            iconSize: [24, 24],
            iconAnchor: [12, 24]
        });

        //一般巡查点
        let markerIcon1 = L.icon({
            iconUrl: 'resources/images/jxapp/move/marker1.png',
            iconSize: [24, 24],
            iconAnchor: [12, 24]
        });

        //参考巡查点
        let markerIcon0 = L.icon({
            iconUrl: 'resources/images/jxapp/move/marker0.png',
            iconSize: [24, 24],
            iconAnchor: [12, 24]
        });

        //创建实际巡查路线
        let nodes = record.get('path');
        if (nodes && nodes.length > 0) {
            let path = [];
            let markers = [];
            Ext.each(nodes, function (node) {
                if (node != null) {
                    let seg = [node['y'], node['x']];
                    path.push(seg);

                    let level = node['level'];
                    let markerIcon = null;

                    if (level == 0) {
                        markerIcon = markerIcon0
                    } else if (level == 1) {
                        markerIcon = markerIcon1
                    } else {
                        markerIcon = markerIcon2
                    }


                    let mp = new L.marker([node['y'], node['x']], {
                        icon: markerIcon,
                        draggable: false,
                        title: node['desc']
                    });
                    if (node['node'] != null && node['node'] != '') {
                        mp.bindTooltip(node['node'], {
                            permanent: true,
                            offset: [0, 0],// 偏移
                            direction: "right",// 放置位置
                            //sticky:true,//是否标记在点上面
                            className: 'green-anim-tooltip'// CSS控制
                        }).openTooltip();
                    }
                    markers.push(mp);
                }
            });

            //创建路径
            if (path.length > 0) {
                mp.v.xcPath = L.polyline(path, {color: 'green'}).addTo(conf.map.instance);
                //  conf.map.instance.fitBounds(mp.v.xcPath.getBounds());
                conf.map.instance.setView(mp.v.xcPath.getCenter(), conf.map.mapLocation.ZOOM);
            }

            //创建标签分组
            if (markers.length > 0) {
                mp.v.markerGroup = L.layerGroup(markers);
                conf.map.instance.addLayer(mp.v.markerGroup);
            }
        }

        //创建预设巡查路线

        let pNodes = record.get('planPath');
        if (pNodes && pNodes.length > 0) {
            let path = [];
            let markers = [];
            Ext.each(pNodes, function (node) {
                if (node != null) {
                    let seg = [node['y'], node['x']];
                    path.push(seg);

                    let level = node['level'];
                    let markerIcon = null;

                    if (level == 0) {
                        markerIcon = markerIcon0
                    } else if (level == 1) {
                        markerIcon = markerIcon1
                    } else {
                        markerIcon = markerIcon2
                    }


                    let mp = new L.marker([node['y'], node['x']], {
                        icon: markerIcon,
                        draggable: false,
                        title: node['desc']
                    });
                    if (node['node'] != null && node['node'] != '') {
                        mp.bindTooltip(node['node'], {
                            permanent: true,
                            offset: [0, 0],// 偏移
                            direction: "left",// 放置位置
                            //sticky:true,//是否标记在点上面
                            className: 'purple-anim-tooltip'// CSS控制
                        }).openTooltip();
                    }
                    markers.push(mp);
                }
            });

            //创建路径
            if (path.length > 0) {
                mp.v.xcPlanPath = L.polyline(path, {color: 'purple'});
            }

            //创建标签分组
            if (markers.length > 0) {
                mp.v.markerPlanGroup = L.layerGroup(markers);
            }

            if (mp.v.isShowPlanXcPath) {
                //创建路径
                if (mp.v.xcPlanPath) {
                    mp.v.xcPlanPath.addTo(conf.map.instance);
                }

                //创建标签分组
                if (mp.v.markerPlanGroup) {
                    conf.map.instance.addLayer(mp.v.markerPlanGroup);
                }
            }
        }
    }
});