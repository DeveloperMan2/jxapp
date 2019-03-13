/**
 * Created by LBM on 2018/10/08.
 */
Ext.define('jxapp.AppConfig', {
    sys: {
        title: '运行管理平台',
        initModule: 'map', /**初始化模块*/
        serviceUrl: 'http://localhost:8080/jxapp/',
        pageSize: 10
    },
    map: {
        instance: null,
        baseLayerGroup: null,//底图组
        imageBaseLayer: null,
        labelBaseLayer: null,
        vectorBaseLayer: null
    },
    module: [
        {
            text: '水库',
            key: 'reservoir',
            iconCls: 'iconfont icon-dazhongxingshuiku',
            checked: false,
            leaf: true
        }, {
            text: '大坝',
            key: 'dam',
            iconCls: 'iconfont icon-daba',
            checked: false,
            leaf: true
        }, {
            text: '泵站',
            key: 'pump',
            iconCls: 'iconfont icon-xiaoxingbengzhan',
            checked: false,
            leaf: true
        }, {
            text: '水闸',
            key: 'gate',
            iconCls: 'iconfont icon-dazhongxingshuizha-map',
            checked: false,
            leaf: true
        }, {
            text: '雨量站',
            key: 'rainstation',
            iconCls: 'iconfont icon-yuliangzhan',
            checked: false,
            leaf: true
        }, {
            text: '水位站',
            key: 'gaugingstation',
            iconCls: 'iconfont icon-shuiweizhan',
            checked: false,
            leaf: true
        }, {
            text: '安全监测站',
            key: 'watchstation',
            iconCls: 'iconfont icon-zidongjiancezhan',
            checked: false,
            leaf: true
        }, {
            text: '摄像头',
            key: 'camera',
            iconCls: 'iconfont icon-shexiangtou',
            checked: false,
            leaf: true
        }, {
            text: '巡检点',
            key: 'inspectionpoint',
            iconCls: 'iconfont icon-xunjiandian',
            checked: false,
            leaf: true
        }
    ]
});

let conf = new jxapp.AppConfig();