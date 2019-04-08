/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('jxapp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.Label',
        'jxapp.view.main.MainController',
        'jxapp.view.main.MainModel',
        'jxapp.view.map.Map'
    ],
    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'map',
            flex: 1
        }
    ]
});
