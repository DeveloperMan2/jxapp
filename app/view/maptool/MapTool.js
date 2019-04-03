/**
 * Created by admin on 2019/3/15.
 */
Ext.define('jxapp.view.maptool.MapTool', {
    extend: 'Ext.panel.Panel',

    requires: [
        'jxapp.view.maptool.MapToolModel',
        'jxapp.view.maptool.MapToolController'
    ],

    viewModel: {
        type: 'maptool'
    },
    xtype: 'maptool',
    controller: 'maptool',
    floating: true,
    shadow: false,
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'button',
            tooltip: '地图全幅',
            text: '全幅',
            iconCls: 'jz-tool-fullextent',
            handler: "mapFullExtent"
        },
        {
            xtype: 'button',
            tooltip: '测距',
            text: '测距',
            iconCls: 'jz-tool-fullextent',
            listeners: {
                added: "addInitMapTool"
            }
        },
        {
            xtype: 'button',
            tooltip: '清除地图',
            text: '清除',
            iconCls: 'jz-tool-clear',
            handler: "clearMapHandler"
        },
        {
            xtype: 'button',
            tooltip: '划界确权',
            text: '划界确权',
            iconCls: 'jz-tool-fullextent',
            pressed: true,
            enableToggle: true,
            listeners: {
                click:'boundaryLayerControl'
            }
        }
    ]
});