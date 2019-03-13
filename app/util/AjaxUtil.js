/**此对象为ajax请求类，全局唯一，每次调用前需要初始化相关参数，url默认已经添加,不需要重复设置*/
let ajax = {
    v: {
        timeout: 60000,//请求超时设置
        method: 'GET',//请求方式
        url: '',//请求服务地址
        successCallBack: null,//回调至少包含一个参数
        failureCallBack: null,//回调至少包含一个参数
        params: null//采用json对象的方式组织参数，如 ajax.v.params = {action: 'query',name: '北京'};
    },
    fn: {
        showMask: function (target, msg) {
            let mask = new Ext.LoadMask(target, {
                msg: msg,
                removeMask: true
            });
            mask.show();
            return mask;
        },
        hideMask: function (mask) {
            if (mask) {
                mask.hide();
                mask = null;
            }
        },
        //默认多实例执行（推荐）
        execute: function (params, method, url, successcallback, failurecallback) {
        if (params === null || params === undefined) {
            params = {};
        }
        //追加时间戳
        params['timeStamp'] = Ext.Date.now();

        Ext.Ajax.setTimeout(ajax.v.timeout);
        Ext.Ajax.async = true;//是否异步
        Ext.Ajax.cors = true;//是否跨域
        Ext.Ajax.autoAbort = true;//是否自动销毁
        Ext.Ajax.request({
            method: method || ajax.v.method,
            url: url || ajax.v.url,
            success: function (response, opts) {
                if (successcallback)
                successcallback(response, opts);
            },
            failure: function (response, opts) {
                if (failurecallback)
                failurecallback(response, opts);
            },
            params: params
        });
        }
    }
};

/**
 * 定义集成打包
 */
Ext.define('jxapp.util.AjaxUtil', {});

