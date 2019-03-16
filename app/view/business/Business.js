/**
 * Created by winnerlbm on 2019/3/16.
 */
Ext.define('jxapp.view.business.Business', {
    extend: 'Ext.panel.Panel',

    requires: [
        'jxapp.view.business.BusinessModel',
        'jxapp.view.business.BusinessController'
    ],

    title: '操作面板',
    /*
    Uncomment to give this component an xtype*/
    xtype: 'business',

    viewModel: {
        type: 'business'
    },

    controller: 'business',

    iconCls:'jxapp icon-yewu',
    ui: 'common-panel-ui',
    floating: true,
    border: true,
    shadow: false,
    plain: true,
    items: [
        /* include child components here */
    ]
});