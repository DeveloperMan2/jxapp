/**
 * Created by winnerlbm on 2019/3/16.
 */
Ext.define('jxapp.view.business.BusinessController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.business',

    /**
     * Called when the view is created
     */
    init: function () {

    },
    hidePanelHandler: function (tool, e, panel, eOpts) {
        loUtil.showDockButton(panel);

        //临时增加相关逻辑控制
        if (conf.layout.layerSwitcherPanel && conf.layout.mapToolPanel) {
            conf.layout.layerSwitcherParams.gapX = conf.layout.mapToolPanelParams.gapX = 52;
            loUtil.refreshLayout(conf.layout.layerSwitcherPanel, conf.layout.layerSwitcherParams);
            loUtil.refreshLayout(conf.layout.mapToolPanel, conf.layout.mapToolPanelParams);
        }

        loUtil.refreshLayout();
    }
});