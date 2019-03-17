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
        conf.map.instance.fitBounds(conf.map.extentBound);
    },
});