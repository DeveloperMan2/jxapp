/**
 * Created by LBM on 2018/2/8.
 */
var cu = {
    //TODO 2018-04-24---创建弹出面板
    createPopupWindow: function (name, url, msg, time) {
        var me = this;
        let panel = Ext.create('Ext.window.Window', {
                iconCls: 'fa fa-info-circle',
                closeToolText: '关闭',
                layout: 'fit',
                autoRender: true,
                bodyPadding: 0,
                header: {
                    padding: '0 5 0 0'
                },
                border: false,
                frame: false,
                modal: true,
                scrollable: false,
                resizable: false,
                constrain: true,
                closable: true,
                draggable: true,
                closeAction: 'hide',
                items: [{
                    xtype: 'uxiframe',
                    loadMask: true,
                    src: url,
                    listeners: {
                        afterrender: function (uxif, eOpts) {
                            uxif.updateLayout();
                        },
                        //         me.loadHtmlContent(uxif, url, true, msg,
                        //             time);
                        //
                        //     },
                        scope: this
                    }
                }],
                listeners: {
                    close: function () {
                        // var uxif = Ext.getCmp('skInfoiFrameId');
                        // me.loadHtmlContent(uxif, 'about:blank', true,
                        //     '', 0);
                        // uxif.updateLayout();
                    }
                }
            }
        );

        var bodyDom = Ext.getBody().dom;
        panel.setWidth(bodyDom.clientWidth / 3 * 2);
        panel.setHeight(bodyDom.clientHeight / 3 * 2);
        panel.setTitle(name);
        panel.show();
    },
    loadHtmlContent: function (iframe, url, mask, message, millisecond) {
        if (mask) {
            var loadMask = new Ext.LoadMask(iframe, {
                msg: message,
                style: {
                    width: '100%',
                    height: '100%',
                    background: '#FFFFFF'
                }
            });
            loadMask.show();
            Ext.defer(function () {
                loadMask.hide();
            }, millisecond);
        }

        iframe.load(url);
    }
};
Ext.define('jxapp.util.ConstUtil', {});