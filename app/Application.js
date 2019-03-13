/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('jxapp.Application', {
    extend: 'Ext.app.Application',

    name: 'jxapp',

    quickTips: false,
    platformConfig: {
        desktop: {
        quickTips: true
        }
    },

    controllers: ["AppController"],

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
        document.title = conf.sys.title;
        let load = Ext.get('loading');
        if (load) {
        load.remove();//清除启动mask
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('更新提示', '当前应用有更新，是否重载?',
        function (choice) {
            if (choice === 'yes') {
                window.location.reload();
            }
        });
    }
});