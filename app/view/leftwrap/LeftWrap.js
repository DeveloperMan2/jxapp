/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.leftwrap.LeftWrap', {
    extend: 'Ext.Container',

    requires: [
        'jxapp.view.layercatalog.LayerCatalog',
        'jxapp.view.layerswitcher.LayerSwitcher',
        'jxapp.view.leftwrap.LeftWrapController',
        'jxapp.view.leftwrap.LeftWrapModel'
    ],

    /*
    Uncomment to give this component an xtype */
    xtype: 'leftwrap',

    viewModel: {
        type: 'leftwrap'
    },

    controller: 'leftwrap',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        /* include child components here */
        {
            xtype: 'layercatalog',
            flex: 1
        },
        {
            xtype: 'layerswitcher',
            height: 100
        }
    ]
});