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
        //地图容器Id
        mapId: 'mapContainerId',
        mapParentId: 'mapParentContainerId',
        mapLocation: {
            X: 117.02,
            Y: 28.23,
            ZOOM: 10,
            minZoom: 3,
            maxZoom: 20
        },
        instance: null,
        baseLayerGroup: null,//底图组
        imageBaseLayerUrl: 'https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        labelBaseLayerUrl: '',
        vectorBaseLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        imageBaseLayer: null,
        labelBaseLayer: null,
        vectorBaseLayer: null
    },
    layout: {
        //底图面板
        layerSwitcherPanel: null,
        //图例面板
        legendPanel: null,
        //业务操作面板
        businessPanel: null,
        //底图面板参数
        layerSwitcherParams: {
            gapX: 10,
            gapY: 10,//40,
            //bottomY: 0,
            w: 160,//数值或百分比，如：100%
            h: 60,//数值或百分比，如：100%
            align: 'br'
        },
        //图例面板参数
        legendParams: {
            gapX: 10,
            gapY: 10,//40,
            //bottomY: 0,
            w: 150,//数值或百分比，如：100%
            h: 200,//数值或百分比，如：100%
            align: 'bl'
        },
        //业务操作面板参数
        businessParams: {
            gapX: 10,
            gapY: 10,//40,
            bottomY: 80,
            w: 400,//数值或百分比，如：100%
            h: '100%',//数值或百分比，如：100%
            align: 'tr'
        }
    },
    module: [
        {
            text: '水库',
            key: 'reservoir',
            iconCls: 'jxapp icon-dazhongxingshuiku',
            checked: false,
            leaf: true
        }, {
            text: '大坝',
            key: 'dam',
            iconCls: 'jxapp icon-daba',
            checked: false,
            leaf: true
        }, {
            text: '泵站',
            key: 'pump',
            iconCls: 'jxapp icon-xiaoxingbengzhan',
            checked: false,
            leaf: true
        }, {
            text: '水闸',
            key: 'gate',
            iconCls: 'jxapp icon-dazhongxingshuizha-map',
            checked: false,
            leaf: true
        }, {
            text: '雨量站',
            key: 'rainstation',
            iconCls: 'jxapp icon-yuliangzhan',
            checked: false,
            leaf: true
        }, {
            text: '水位站',
            key: 'gaugingstation',
            iconCls: 'jxapp icon-shuiweizhan',
            checked: false,
            leaf: true
        }, {
            text: '安全监测站',
            key: 'watchstation',
            iconCls: 'jxapp icon-zidongjiancezhan',
            checked: false,
            leaf: true
        }, {
            text: '摄像头',
            key: 'camera',
            iconCls: 'jxapp icon-shexiangtou',
            checked: false,
            leaf: true
        }, {
            text: '巡检点',
            key: 'inspectionpoint',
            iconCls: 'jxapp icon-xunjiandian',
            checked: false,
            leaf: true
        }
    ]
});

let conf = new jxapp.AppConfig();