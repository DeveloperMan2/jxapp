/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.util.MapUtil', {
    //底图切换
    switchBaseLayer: function (action) {
        if (conf.map.baseLayerGroup != null) {
            conf.map.baseLayerGroup.clearLayers();
        }
        if (action == "image") {
            if (conf.map.imageBaseLayer == null) {
                conf.map.imageBaseLayer =  L.tileLayer(conf.layers.googleImg+'/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    id: 'google.img'
                })
            }

            if (conf.map.labelBaseLayer == null) {
                conf.map.labelBaseLayer =  L.tileLayer(conf.layers.googleImgAno+'/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    id: 'google.imgano'
                })
            }
            conf.map.baseLayerGroup = L.layerGroup([conf.map.imageBaseLayer, conf.map.labelBaseLayer]).addTo(conf.map.instance);
        } else if (action == "vector") {
            if (conf.map.vectorBaseLayer == null) {
                conf.map.vectorBaseLayer =  L.tileLayer(conf.layers.gaodeVector+'/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    id: 'gaode.vec'
                })
            }
            conf.map.baseLayerGroup = L.layerGroup([conf.map.vectorBaseLayer]).addTo(conf.map.instance);
        }
    }
});

let mapUtil = new jxapp.util.MapUtil();