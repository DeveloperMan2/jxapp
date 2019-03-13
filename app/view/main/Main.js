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
		'jxapp.util.WrapUtil',
		'jxapp.view.leftwrap.LeftWrap',
		'jxapp.view.main.MainController',
		'jxapp.view.main.MainModel'
	],
	controller: 'main',
    viewModel: 'main',
	layout: {
	type: 'hbox',
	pack: 'start',
	align: 'stretch'
	},
	items: [
		/* include child components here */
		{
			xtype:'leftwrap',
			width:250
		},
		{
			xtype: 'warputil',
			id: 'module-wrap',
			reference: 'moduleContainerWrap',
			flex: 1,
			layout: {
			type: 'card',
			anchor: '100%'
			},
			listeners: {
				render: 'onModuleViewRender'
			}
		}
	]
});
