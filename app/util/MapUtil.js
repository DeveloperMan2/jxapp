/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.util.MapUtil', {
    //底图切换
    switchBaseLayer: function (action) {
        if (conf.map.baseLayerGroup != null) {
            conf.map.baseLayerGroup.clearLayers();
        }
        let baseLayers = [];
        if (action == "image") {
            if (conf.map.imageBaseLayer == null && conf.map.imageBaseLayerUrl) {
                conf.map.imageBaseLayer = L.tileLayer(conf.map.imageBaseLayerUrl, {
                    maxZoom: conf.map.mapLocation.maxZoom,
                    attribution: 'leaflet',
                    id: action + 'layer'
                });
            }

            if (conf.map.labelBaseLayer == null && conf.map.labelBaseLayerUrl) {
                conf.map.labelBaseLayer = L.tileLayer(conf.map.labelBaseLayerUrl, {
                    maxZoom: conf.map.mapLocation.maxZoom,
                    attribution: 'leaflet',
                    id: action + 'layer'
                });
            }

            if (conf.map.imageBaseLayerUrl) {
                baseLayers.push(conf.map.imageBaseLayer);
            }
            if (conf.map.labelBaseLayer) {
                baseLayers.push(conf.map.labelBaseLayer);
            }
            conf.map.baseLayerGroup = L.layerGroup(baseLayers).addTo(conf.map.instance);
        } else if (action == "vector") {
            if (conf.map.vectorBaseLayer == null && conf.map.vectorBaseLayerUrl) {
                conf.map.vectorBaseLayer = L.tileLayer(conf.map.vectorBaseLayerUrl, {
                    maxZoom: conf.map.mapLocation.maxZoom,
                    attribution: 'leaflet',
                    id: action + 'layer'
                });
            }
            if (conf.map.vectorBaseLayer) {
                baseLayers.push(conf.map.vectorBaseLayer);
            }
            conf.map.baseLayerGroup = L.layerGroup(baseLayers).addTo(conf.map.instance);
        }
    },
    addLayer: function (key) {
        //初始化业务图组
        if (conf.map.businessLayerGroup == null) {
            conf.map.businessLayerGroup = L.layerGroup([]).addTo(conf.map.instance);
        }

        let params = {};

        function success(response) {
            let result = Ext.util.JSON.decode(response.responseText);
            if (result && result.data[key] && result.data[key].value) {
                let geoLayer = L.geoJSON(result.data[key].value, {
                    style: function (feature) {
                        return {color: feature.properties.color};
                    }
                }).bindPopup(function (layer) {
                    return layer.feature.properties.name;
                });

                conf.map.baseLayerGroup.addLayer(geoLayer);

                if (conf.map.businessLayerMap) {
                    conf.map.businessLayerMap.add(key, geoLayer);
                }
            }
        }

        function failure(response) {

        }

        ajax.fn.execute(params, 'GET', 'resources/data/' + key + '.json', success, failure);
    },
    removeLayer: function (key) {
        if (conf.map.baseLayerGroup && conf.map.businessLayerMap) {
            let blayer = conf.map.businessLayerMap.get(key);
            conf.map.baseLayerGroup.removeLayer(blayer);
        }
    }
});

let mapUtil = new jxapp.util.MapUtil();