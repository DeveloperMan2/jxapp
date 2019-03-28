/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.util.MapUtil', {
    //底图切换
    switchBaseLayer: function (action) {
        let oldLayers = null;
        if (action == "image") {
            if (conf.map.baseVectorLayerGroup != null) {
                conf.map.baseVectorLayerGroup.remove();
            }
            oldLayers = conf.map.instance._layers;
            if (conf.map.baseImageLayerGroup == null) {
                conf.map.leanBoundLayer = new L.KML(conf.map.leanBoundLayerUrl, {
                    async: true
                });
                conf.map.imageBaseLayer = L.tileLayer(conf.map.imageBaseLayerUrl, {
                    minZoom: conf.map.mapLocation.minZoom,
                    maxZoom: conf.map.mapLocation.maxZoom,
                    attribution: 'leaflet',
                    id: action + 'layer'
                });
                conf.map.labelBaseLayer = L.tileLayer(conf.map.labelBaseLayerUrl, {
                    minZoom: conf.map.mapLocation.minZoom,
                    maxZoom: conf.map.mapLocation.maxZoom,
                    attribution: 'leaflet',
                    id: action + 'layer'
                });
                conf.map.baseImageLayerGroup = L.layerGroup([conf.map.imageBaseLayer, conf.map.labelBaseLayer, conf.map.leanBoundLayer]);
                conf.map.baseImageLayerGroup.addTo(conf.map.instance);
            } else {
                conf.map.baseImageLayerGroup.addTo(conf.map.instance);
            }
        } else if (action == "vector") {
            if (conf.map.baseImageLayerGroup != null) {
                conf.map.baseImageLayerGroup.remove();
            }
            oldLayers = conf.map.instance._layers;
            if (conf.map.baseVectorLayerGroup == null) {
                oldLayers = conf.map.instance.layers;
                conf.map.vectorBaseLayer = L.tileLayer(conf.map.vectorBaseLayerUrl, {
                    minZoom: conf.map.mapLocation.minZoom,
                    maxZoom: conf.map.mapLocation.maxZoom,
                    attribution: 'leaflet',
                    id: action + 'layer'
                });
                conf.map.leanBoundLayer = new L.KML(conf.map.leanBoundLayerUrl, {
                    async: true
                });
                conf.map.baseVectorLayerGroup = L.layerGroup([conf.map.vectorBaseLayer, conf.map.leanBoundLayer]);
                conf.map.baseVectorLayerGroup.addTo(conf.map.instance);
            } else {
                conf.map.baseVectorLayerGroup.addTo(conf.map.instance);
            }
        }
        Ext.Object.each(oldLayers, function (key, value, countriesItSelf) {
            value.addTo(conf.map.instance);
        })
    },
    addLayer: function (key, cls) {
        //初始化业务图组
        if (conf.map.businessLayerGroup == null) {
            conf.map.businessLayerGroup = L.layerGroup([]).addTo(conf.map.instance);
        }
        if (conf.map.businessBoundaryLayerGroup == null) {
            conf.map.businessBoundaryLayerGroup = L.layerGroup([]).addTo(conf.map.instance);
        }
        let params = {};

        function success(response) {
            let result = Ext.util.JSON.decode(response.responseText);
            if (result && result.data[key] && result.data[key].value) {
                let markColor = "#FFFFFF";
                var iconObj = L.AwesomeMarkers.icon({
                    icon: cls,
                    iconColor: markColor,
                    prefix: '',
                    spin: false
                });
                let value = result.data[key].value;
                let geoLayer = L.geoJSON(value, {
                    pointToLayer: function (geoJsonPoint, latlng) {
                        let mark = L.marker(latlng, {
                            icon: iconObj,
                            title: geoJsonPoint["properties"]["name"],
                            attr: geoJsonPoint
                        });
                        mark.on('click', function (mk) {
                            let prop = mk.target.feature.properties;
                            cu.createPopupWindow(prop["name"], prop["url"],"资源加载中...",1000);
                        });
                        return mark;
                    },
                    id: key,
                })

                conf.map.businessLayerGroup.addLayer(geoLayer);

                conf.map.businessLayerMap.add(key, geoLayer);

                //处理数据里的确权界数据
                Ext.Array.each(value.features, function (feature, index, countriesItSelf) {
                    if (feature["properties"] && feature["properties"]["apoint"]) {
                        let geoBoundaryLayer = L.geoJSON(feature["properties"]["apoint"], {
                            style: function (feature) {
                                return {color: "#FF0000", fill: false};
                            }
                        }).bindPopup(function (layer) {
                            return layer.feature.properties.name;
                        });
                        conf.map.businessBoundaryLayerGroup.addLayer(geoBoundaryLayer);
                        conf.map.businessBoundaryLayerMap.add(key, geoBoundaryLayer);
                    }
                });
            }
        }

        function failure(response) {

        }

        ajax.fn.execute(params, 'GET', 'resources/data/' + key + '.json', success, failure);
    },
    removeLayer: function (key) {
        if (conf.map.businessLayerGroup && conf.map.businessLayerMap) {
            let blayer = conf.map.businessLayerMap.get(key);
            conf.map.businessLayerGroup.removeLayer(blayer);
        }

        if (conf.map.businessBoundaryLayerGroup && conf.map.businessBoundaryLayerMap) {
            let boundarylayer = conf.map.businessBoundaryLayerMap.get(key);
            conf.map.businessBoundaryLayerMap.remove(boundarylayer);
            conf.map.businessBoundaryLayerGroup.removeLayer(boundarylayer);
        }
    }
});

let mapUtil = new jxapp.util.MapUtil();