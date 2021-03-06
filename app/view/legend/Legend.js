/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.legend.Legend', {
    extend: 'Ext.panel.Panel',

    requires: [
        'jxapp.view.legend.LegendModel',
        'jxapp.view.legend.LegendController'
    ],
    title: '图例面板',
    /*
    Uncomment to give this component an xtype*/
    xtype: 'legend',

    viewModel: {
        type: 'legend'
    },

    controller: 'legend',

    iconCls: 'fas fa-image',
    ui: 'common-panel-ui',
    floating: true,
    border: true,
    shadow: false,
    plain: true,
    items: [
        /* include child components here */
    ]
});