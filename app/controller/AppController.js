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
                'checkchange': function (node, checked, e, eOpts) {
                    if (checked) {
                        let key = node.getData()['key'];
                        if (key) {
                            alert(key);
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

    }
});