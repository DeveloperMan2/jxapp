/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.layerswitcher.LayerSwitcherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layerswitcher',

    /**
     * Called when the view is created
     */
    init: function () {
        //todo : 底图切换代码逻辑
        let mbtn = Ext.getCmp('mapButtonId'), ibtn = Ext.getCmp('imgButtonId');
        //监听全局鼠标事件
        Ext.getBody().on('mousedown', function (e, t) {
            if (e.within(mbtn.el)) {
                mapUtil.switchBaseLayer('vector');
            } else if (e.within(ibtn.el)) {
                mapUtil.switchBaseLayer('image');
            }
        });
    }
});