/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.legend.Legend', {
    extend: 'Ext.Container',

    requires: [
        'jxapp.view.legend.LegendModel',
        'jxapp.view.legend.LegendController'
    ],

    /*
    Uncomment to give this component an xtype*/
    xtype: 'legend',

    viewModel: {
        type: 'legend'
    },

    controller: 'legend',

    items: [
        /* include child components here */
    ]
});