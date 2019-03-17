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
    height: 28,
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
        },
        {
            xtype: 'segmentedbutton',
            defaults: {
                border: false,
                scale: 'small',
                ui: 'map-tool-ui'
            }
            ,
            items: [{
                xtype: 'button',
                action: 'image',
                text: '影像',
                iconCls: 'jz-tool-image'
            }, {
                xtype: 'button',
                action: 'vector',
                pressed: true,
                text: '矢量',
                iconCls: 'jz-tool-vector'
            }],
            listeners: {
                toggle: function (container, button, pressed) {
                    if (pressed) {
                       // var action = button['action'];
                        // mv.fn.switchBaseLayer(action);
                    }
                }
            }
        }
    ]
});