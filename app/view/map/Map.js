/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.map.Map', {
    extend: 'Ext.Container',

    requires: [
        'jxapp.view.map.MapModel',
        'jxapp.view.map.MapController'
    ],

    /*
    Uncomment to give this component an xtype*/
    xtype: 'map',

    viewModel: {
        type: 'map'
    },

    controller: 'map',
    layout: 'fit',
    listeners: {
        afterrender: 'afterrender',
        afterlayout: 'afterlayout'
    },
    items: [
        /* include child components here */
        {
            xtype: 'container',
            id: 'mapParentContainerId',
            html: '<div id="mapContainerId" class="mapContainerCls"></div>',
            margin: '0 0 0 0'
        }
    ]
});