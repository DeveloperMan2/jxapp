/**
 * Created by LBM on 2018/2/7.
 */
Ext.define('jxapp.view.layercatalog.LayerCatalog', {
    extend: 'Ext.panel.Panel',

	requires: [
		'jxapp.view.layercatalog.LayerCatalogController',
		'jxapp.view.layercatalog.LayerCatalogModel'
	],

	/*
    Uncomment to give this component an xtype*/
    xtype: 'layercatalog',

    viewModel: {
    type: 'layercatalog'
    },

    controller: 'layercatalog',
    title: conf.sys.title,
    iconCls: 'far fa-object-group',
    scrollable: 'y',
    margin: '0 0 0 0',
    border: false,
    items: [
		{
			xtype: 'treepanel',
			id: 'moduleTreeId',
			checkPropagation: 'both',
			rootVisible: false,
			titleCollapse: true,
			useArrows: true,
			frame: false,
			bufferedRenderer: false,
			animate: true,
			rowLines: true,
			columnLines: true,
			singleExpand: false,
			expanderOnly: true,
			expanderFirst: false,
			itemRipple: true,
			store: {
				data: conf.module
			}
		}
	]
});