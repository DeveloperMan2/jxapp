Ext.define('jxapp.util.WrapUtil', {
    extend: 'Ext.container.Container',
    xtype: 'warputil',

    scrollable: 'y',
    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },
    beforeLayout: function () {
        this.height = Ext.Element.getViewportHeight();
        this.callParent(arguments);
    }
});
