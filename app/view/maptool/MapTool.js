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
                added: function (view, ct, index, eOpts) {
                    L.control.ruler({view: view}).addTo(conf.map.instance);
                }
            }
        }
        ,
        {
            xtype: 'button',
            tooltip: '清除地图',
            text: '清除',
            iconCls: 'jz-tool-clear',
            handler: function () {
                // if (mv.v.measureDistool != null) {
                // //    mv.v.measureDistool.clearHandler();
                // }
                //清空专题地图

            }
        }
    ]
});