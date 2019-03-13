/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.layerswitcher.LayerSwitcher', {
    extend: 'Ext.Container',

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
        type: 'hbox',
        pack: 'center',
        align: 'middle'
    },
    items: [
        /* include child components here */
        {
            xtype: 'image',
            id: 'mapButtonId',
            width: 80,
            height: 50,
            margin: '0 20 0 0',
            cls: 'mapIconCls'
        },
        {
            xtype: 'image',
            id: 'imgButtonId',
            width: 80,
            height: 50,
            cls: 'imgIconCls'
        }
    ]
});