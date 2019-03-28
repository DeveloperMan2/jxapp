/**
 * Created by winnerlbm on 2019/3/16.
 */
Ext.define('jxapp.view.business.Business', {
    extend: 'Ext.panel.Panel',

    requires: [
        'jxapp.view.business.BusinessController',
        'jxapp.view.business.BusinessModel',
        'jxapp.view.mappatrol.MapPatrol'
    ],

    title: '操作面板',
    /*
    Uncomment to give this component an xtype*/
    xtype: 'business',

    viewModel: {
        type: 'business'
    },

    controller: 'business',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    iconCls: 'far fa-object-group',
    ui: 'common-panel-ui',
    floating: true,
    border: true,
    shadow: false,
    plain: true,
    items: [
        /* include child components here */
        {
            xtype: 'rtmview'
        }
    ]
});