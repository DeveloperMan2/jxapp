/**
 * 模块类型工具
 * Created by winnerlbm on 2018/7/21.
 */
Ext.define('jxapp.util.ModuleUtil', {
    loadHtml: function (iframe, url, mask, message, millisecond) {
        if (mask) {
            let loadMask = new Ext.LoadMask(iframe, {
                msg: message,
                style: {
                    width: '100%',
                    height: '100%'/*,
                    background: '#0C2840'*/
                }
            });
            loadMask.show();
            Ext.defer(function () {
                loadMask.hide();
            }, millisecond);
        }

        iframe.load(url);
    },
    /**
     * 加载模块
     * @param module : 模块参数
     * @param moduleContainer : 装在模块的容器
     */
    loadModule: function (module, moduleContainer) {
        //加载模块
        if (moduleContainer) {
            let mc = moduleContainer.getController();
            let moduleId = module['moduleId'];
            if (moduleId) {
                mc.redirectTo(moduleId);
                moduleContainer.updateLayout();
            }
        }
    }
});

let moUtil = new jxapp.util.ModuleUtil();