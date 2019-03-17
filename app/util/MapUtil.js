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
    }
});

let mapUtil = new jxapp.util.MapUtil();