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

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    ui: 'layerswitcher-panel-ui',
    floating: true,
    border: true,
    shadow: false,
    plain: true,
    items: [
        {
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'image',
                    id: 'mapButtonId',
                    width: 80,
                    height: 60,
                    margin: '0 0 0 0',
                    cls: 'mapIconCls'
                },
                {
                    xtype: 'image',
                    id: 'imgButtonId',
                    width: 80,
                    height: 60,
                    cls: 'imgIconCls'
                }
            ]
        },
        {
            xtype:'checkbox',
            ui: 'layercontroller-checkbox-ui',
            boxLabel: '划界确权'
        }
    ]
});