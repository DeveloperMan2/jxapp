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
    title: '图层控制',
    iconCls: 'far fa-object-group',
    scrollable: 'y',
    margin: '0 0 0 0',
    ui: 'common-panel-ui',
    floating: true,
    flex:1,
    border: true,
    shadow: false,
    plain: true,
    items: [
        {
            xtype: 'treepanel',
            id: 'moduleTreeId',
            checkPropagation: 'both',
            rootVisible: false,
            titleCollapse: true,
            useArrows: false,
            reserveScrollbar: false,
            scrollable: false,
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
                data: conf.catalog
            }
        }
    ]
});