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

        //初始化浮动面板
        this.createLegendPanel('mapParentContainerId');
        this.createMapToolPanel('mapParentContainerId');
    },
    afterlayout: function () {
        //地图重绘
        if (conf.map.instance) {
            conf.map.instance.invalidateSize();
        }
        loUtil.refreshLayout();
    },
    initMap: function (mapid) {
        conf.map.instance = L.map(mapid, {
            zoomControl: true,
            attributionControl: false
        }).fitWorld();

        //底图测试
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(conf.map.instance);
        conf.map.instance.flyTo(L.latLng(27.3,115.8), 11, true);//定位到乐安
    },
    createLegendPanel:function (parentId) {
            let parentContainer = Ext.getDom(parentId);
            if (conf.layout.mapSwitchPanel == null) {
                conf.layout.mapSwitchPanel = new Ext.create('widget.layerswitcher', {
                    renderTo: parentContainer,
                    bodyPadding: 0
                });
            }
            conf.layout.mapSwitchPanel.show();
            loUtil.relayoutPanel(parentContainer, conf.layout.mapSwitchPanel, conf.layout.mapSwitchPanelParams);
    },
    createMapToolPanel:function (parentId) {
        let parentContainer = Ext.getDom(parentId);
        if (conf.layout.mapToolPanel == null) {
            conf.layout.mapToolPanel = new Ext.create('widget.maptool', {
                renderTo: parentContainer,
                bodyPadding: 0
            });
        }
        conf.layout.mapToolPanel.show();
        loUtil.relayoutPanel(parentContainer, conf.layout.mapToolPanel, conf.layout.mapToolPanelParams);
    }
});