/**
 * Created by LBM on 2018/2/7.
 */
Ext.define('jxapp.controller.AppController', {
    extend: 'Ext.app.Controller',

    config: {
        //Uncomment to add references to view components
        refs: [
            /*{
                ref: 'leftView',
                selector: 'layercatalog'
            },
            {
                ref: 'mainView',
                selector: 'main'
            }*/
        ],
        //Uncomment to listen for events from view components
        control: {
            '#moduleTreeId': {
                'afterrender': function () {
                    this.initBusinessLayer(this);
                },
                'checkchange': function (node, checked, e, eOpts) {
                    let key = node.getData()['key'];
                    if (key) {
                        if (checked) {
                            this.addBusinessLayer(key);
                        } else {
                            this.removeBusinessLayer(key);
                        }
                    }
                }
            }
        }
    },

    /**
     * Called when the view is created
     */
    init: function () {

    },
    initBusinessLayer: function (me) {
        if (conf.catalog) {
            Ext.each(conf.catalog, function (layer) {
                if (layer['checked']) {
                    me.addBusinessLayer(layer['key'])
                }
            });
        }
    },
    addBusinessLayer: function (key) {
        mapUtil.addLayer(key);
    },
    removeBusinessLayer: function (key) {
        mapUtil.removeLayer(key);
    }
});