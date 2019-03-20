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
        this.initMap(conf.map.mapId);

        //底图面板
        this.createLayerSwitcher(conf.map.mapParentId);
        //图例面板
        this.createLegend(conf.map.mapParentId);
        //业务面板
        this.createBusiness(conf.map.mapParentId);
        //图层面板
        this.createCatalog(conf.map.mapParentId);
        //this.createMapToolPanel('mapParentContainerId');
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
            zoomControl: false,
            attributionControl: false
        }).fitWorld();

        //默认矢量底图
        mapUtil.switchBaseLayer('vector');
        conf.map.instance.flyTo(L.latLng(conf.map.mapLocation.Y, conf.map.mapLocation.X), conf.map.mapLocation.ZOOM, true);
    },
    //底图面板
    createLayerSwitcher: function (parentId) {
        let parentContainer = Ext.getDom(parentId);
        if (conf.layout.layerSwitcherPanel == null) {
            conf.layout.layerSwitcherPanel = new Ext.create('widget.layerswitcher', {
                renderTo: parentContainer,
                bodyPadding: 0
            });
        }

        conf.layout.layerSwitcherPanel.show();
        loUtil.relayoutPanel(parentContainer, conf.layout.layerSwitcherPanel, conf.layout.layerSwitcherParams);
    },
    //图例面板
    createLegend: function (parentId) {
        let parentContainer = Ext.getDom(parentId);
        if (conf.layout.legendPanel == null) {
            conf.layout.legendPanel = new Ext.create('widget.legend', {
                renderTo: parentContainer,
                bodyPadding: 0
            });
        }

        conf.layout.legendPanel.show();
        loUtil.relayoutPanel(parentContainer, conf.layout.legendPanel, conf.layout.legendParams);
    },
    //业务面板
    createBusiness: function (parentId) {
        let parentContainer = Ext.getDom(parentId);
        if (conf.layout.businessPanel == null) {
            conf.layout.businessPanel = new Ext.create('widget.business', {
                renderTo: parentContainer,
                bodyPadding: 0
            });
        }

        conf.layout.businessPanel.show();
        loUtil.relayoutPanel(parentContainer, conf.layout.businessPanel, conf.layout.businessParams);
    },
    //图层目录面板
    createCatalog: function (parentId) {
        let parentContainer = Ext.getDom(parentId);
        if (conf.layout.catalogPanel == null) {
            conf.layout.catalogPanel = new Ext.create('widget.layercatalog', {
                renderTo: parentContainer,
                bodyPadding: 0
            });

        }
        conf.layout.catalogPanel.show();
        loUtil.relayoutPanel(parentContainer, conf.layout.catalogPanel, conf.layout.catalogParams);
   
    },
     //图层工具面板
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