/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.map.MapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.map',

    /**
     * Called when the view is created
     */
    init: function () {

    },
    afterrender: function () {
        //地图初始化
        this.initMap('mapContainerId');
    },
    afterlayout: function () {
        //地图重绘
        if (conf.map.instance) {
            conf.map.instance.invalidateSize();
        }
    },
    initMap: function (mapid) {
        conf.map.instance = L.map(mapid, {
            zoomControl: false,
            attributionControl: false
        }).fitWorld();

        //底图测试
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(conf.map.instance);
        conf.map.instance.flyTo(L.latLng(28.23, 117.02), 10, true);//定位到鹰潭市
    }
});