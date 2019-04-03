/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.layerswitcher.LayerSwitcher', {
    extend: 'Ext.panel.Panel',

    requires: [
        'jxapp.view.layerswitcher.LayerSwitcherModel',
        'jxapp.view.layerswitcher.LayerSwitcherController'
    ],

    /*
    Uncomment to give this component an xtype */
    xtype: 'layerswitcher',

    viewModel: {
        type: 'layerswitcher'
    },

    controller: 'layerswitcher',

    ui: 'layerswitcher-panel-ui',
    floating: true,
    border: true,
    shadow: false,
    plain: true,
    layout: {
        type: 'hbox',
        pack: 'middle',
        align: 'center'
    },
    margin: '5 0 5 0',
    items: [
        {
            xtype: 'container',
            flex: 1,
            items: [
                {
                    xtype: 'button',
                    alt: "",
                    ui: "",
                    width: 86,
                    height: 60,
                    cls: 'vector-icon-cls',
                    action: 'vector',
                    listeners: {
                        'click': 'wrapButtonClick',
                        'mouseover': 'wrapButtonMouseOver',
                        'mouseout': 'wrapButtonMouseOut'
                    }
                },
                {
                    xtype: 'button',
                    cls: 'baselayer-title',
                    ui: 'baselayer-button-ui',
                    id: 'baselayer-vector-id',
                    width: 86,
                    height: 20,
                    pressed: true,
                    enableToggle: true,
                    text: '地图',
                    action: 'vector',
                    listeners: {
                        'click': 'labelButtonClick'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            items: [
                {
                    xtype: 'button',
                    alt: "",
                    ui: "",
                    width: 86,
                    height: 60,
                    cls: 'image-icon-cls',
                    action: 'image',
                    listeners: {
                        'click': 'wrapButtonClick',
                        'mouseover': 'wrapButtonMouseOver',
                        'mouseout': 'wrapButtonMouseOut'
                    }
                },
                {
                    xtype: 'button',
                    cls: 'baselayer-title',
                    ui: 'baselayer-button-ui',
                    id: 'baselayer-image-id',
                    width: 86,
                    height: 20,
                    enableToggle: true,
                    text: '影像',
                    action: 'image',
                    listeners: {
                        'click': 'labelButtonClick'
                    }
                }
            ]
        }
    ]
});