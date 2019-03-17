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
        layers: {
            googleImg: 'http://localhost:9000',
            googleImgAno: 'http://localhost:9200',
            gaodeVector: 'http://localhost:9001'
        },
        map: {
            instance: null,
            baseLayerGroup: null,//底图组
            imageBaseLayer: null,
            labelBaseLayer: null,
            vectorBaseLayer: null,
            extentBound:null   //全幅显示范围
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
            }, {
                text: '划界确权',
                key: 'boundary',
                iconCls: 'iconfont icon-boundary',
                checked: false,
                leaf: true
            }
        ],
        layout: {
            //左侧面板
            lwPanel: null,
            //右侧面板
            rwPanel: null,
            //图例面板
            legendPanel: null,
            //底图切换面板
            mapSwitchPanel:null,
            //工具栏面板
            mapToolPanel:null,
            //左侧面板参数
            lwParams: {
                gapX: 0,
                gapY: 0,
                w: 250,//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tl'
            },
            //左侧面板参数
            rwParams: {
                gapX: 0,
                gapY: 0,
                w: 400,//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tr'
            },
            //图例面板参数
            legendParams: {
                gapX: 250,
                gapY: 0,
                w: 600,//数值或百分比，如：100%
                h: 20,//数值或百分比，如：100%
                align: 'bl'
            },
            //底图切换面板参数
            mapSwitchPanelParams:{
                gapX: 10,
                gapY: 10,
                w: 125,//数值或百分比，如：100%
                h: 60,//数值或百分比，如：100%
                align: 'br'
            },
            //地图工具栏面板参数
            mapToolPanelParams:{
                gapX: 10,
                gapY: 10,
                align: 'tr'
            }
        }
    }
);

let conf = new jxapp.AppConfig();