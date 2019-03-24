/**
 * Created by winnerlbm on 2019/3/24.
 */
Ext.define('jxapp.view.mappatrol.MapPatrol', {
    extend: 'Ext.Container',

    requires: [
        'jxapp.view.mappatrol.MapPatrolModel',
        'jxapp.view.mappatrol.MapPatrolController'
    ],

    /*
    Uncomment to give this component an xtype*/
    xtype: 'mappatrol',

    viewModel: {
        type: 'mappatrol'
    },

    controller: 'mappatrol',
    layout: 'fit',
    items: [
        /* include child components here */
        {
            xtype: 'container',
            margin: '0 0 0 0',
            items: [
                {
                    xtype: 'checkboxfield',
                    name: 'planPathId',
                    margin: '0 5 0 5',
                    checked: false,
                    isCheckbox: true,
                    height: 30,
                    boxLabel: '开启预设巡查路线',
                    listeners: {
                        change: function (cb, newValue, oldValue, eOpts) {
                            mp.v.isShowPlanXcPath = newValue;
                            if (mp.v.isShowPlanXcPath) {
                                //创建路径
                                if (mp.v.xcPlanPath) {
                                    mp.v.xcPlanPath.addTo(conf.map.instance);
                                }

                                //创建标签分组
                                if (mp.v.markerPlanGroup) {
                                    mp.v.markerPlanGroup.eachLayer(function (marker) {
                                        marker.openTooltip();
                                    });

                                    conf.map.instance.addLayer(mp.v.markerPlanGroup);
                                }
                            } else {
                                if (mp.v.xcPlanPath) {
                                    mp.v.xcPlanPath.remove();
                                }

                                if (mp.v.markerPlanGroup && conf.map.instance.hasLayer(mp.v.markerPlanGroup)) {
                                    conf.map.instance.removeLayer(mp.v.markerPlanGroup);
                                }
                            }
                        }
                    }
                },
                {
                    xtype: 'gridpanel',
                    allowDeselect: false,
                    columns: [
                        {
                            text: '名称', dataIndex: 'name', align: 'center', flex: 1, menuDisabled: true,
                            sortable: false,
                        },
                        {
                            text: '日期', dataIndex: 'date', align: 'center', flex: 1, menuDisabled: true,
                            sortable: false,
                        },
                        {
                            text: '控制',
                            menuDisabled: true,
                            sortable: false,
                            xtype: 'actioncolumn',
                            align: 'center',
                            width: 100,
                            items: [
                                {
                                    iconCls: 'xc-play',
                                    scale: 'large',
                                    tooltip: '播放',
                                    handler: 'onPlayHandler'
                                },
                                {
                                    iconCls: 'xc-pause',
                                    scale: 'large',
                                    tooltip: '暂停',
                                    handler: 'onPauseHandler'
                                },
                                {
                                    iconCls: 'xc-stop',
                                    scale: 'large',
                                    tooltip: '停止',
                                    handler: 'onStopHandler'
                                }
                            ]
                        }
                    ],
                    listeners: {
                        'afterrender': 'gridAfterrenderHandler',
                        'select': 'selectHistoryLineHandler'
                    }
                }
            ]
        }
    ]
});