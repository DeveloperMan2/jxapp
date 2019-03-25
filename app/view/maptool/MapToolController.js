/**
 * Created by admin on 2019/3/15.
 */
Ext.define('jxapp.view.maptool.MapToolController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maptool',

    /**
     * Called when the view is created
     */
    init: function() {

    },
    measureDistool:null,
    mapFullExtent: function () {
        //显示配置文件配置的显示范围
       // conf.map.instance.fitBounds(conf.map.mapLocation.X);
        conf.map.instance.flyTo(L.latLng(conf.map.mapLocation.Y, conf.map.mapLocation.X), conf.map.mapLocation.ZOOM, true);
    },
    addInitMapTool:function(view, ct, index, eOpts){
        measureDistool = L.control.ruler({view: view}).addTo(conf.map.instance);
    },
    clearMapHandler:function(){
        measureDistool != null ? measureDistool.clearHandler(): null;
    }
});