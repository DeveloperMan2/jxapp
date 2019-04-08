/**
 * Created by winnerlbm on 2019/3/16.
 */
Ext.define('jxapp.view.business.Business', {
    extend: 'Ext.panel.Panel',

    requires: [
        'jxapp.view.business.BusinessController',
        'jxapp.view.business.BusinessModel',
        'jxapp.view.mappatrol.MapPatrol',
        'jxapp.view.rtm.Rtm'
    ],

    title: '实时巡检监控',
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
    items: [
        /* include child components here */
        {
            xtype: 'rtmview',
            flex:1
        }
    ],
    tools: [
        {
            iconCls: 'fas fa-minus',
            tooltip: '隐藏',
            hidden: false,
            listeners: {
                click: 'hidePanelHandler'
            }
        }
    ]
});