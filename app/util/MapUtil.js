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

            }

            if (conf.map.labelBaseLayer == null) {

            }
            conf.map.baseLayerGroup = L.layerGroup([conf.map.imageBaseLayer, conf.map.labelBaseLayer]).addTo(conf.map.instance);
        } else if (action == "vector") {
            if (conf.map.vectorBaseLayer == null) {

            }
            conf.map.baseLayerGroup = L.layerGroup([conf.map.vectorBaseLayer]).addTo(conf.map.instance);
        }
    }
});

let mapUtil = new jxapp.util.MapUtil();