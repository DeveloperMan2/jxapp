/**
 * Created by LBM on 2018/10/08.
 */
Ext.define('jxapp.AppConfig', {
        requires: [
            "Ext.util.HashMap"
        ],
        sys: {
            title: '运行管理平台',
            initModule: 'map', /**初始化模块*/
            serviceUrl: 'http://localhost:8080/jxapp/',
            rtmstateUrl: 'http://127.0.0.1:8080/skxj/a/task/xjTaskStatistics/',
            rtmdataUrl: 'http://127.0.0.1:8080/skxj/a/task/xjTask/',
            rtmplesUrl: 'http://127.0.0.1:8080/skxj/a/task/xjTaskTrail/',
            rtmresdataUrl: 'http://127.0.0.1:8080/skxj/a/task/',
            pageSize: 10
        },
        map: {
            //地图容器Id
            mapId: 'mapContainerId',
            mapParentId: 'mapParentContainerId',
            mapLocation: {
                X: 115.823,
                Y: 27.364,
                ZOOM: 10,
                minZoom: 9,
                maxZoom: 18
            },
            mapParams: {
                isImageActivate: true//当前是否激活影像底图
            },
            instance: null,
            baseVectorLayerGroup: null,//底图矢量组
            baseImageLayerGroup: null,//底图影像组
            businessLayerGroup: null,//业务图组
            businessLayerMap: new Ext.util.HashMap(),
            businessBoundaryLayerGroup: null,//业务图层组关联的确权界图层
            businessBoundaryLayerMap: new Ext.util.HashMap(),//业务图层组关联的确权界图层
            // imageBaseLayerUrl: 'https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            // labelBaseLayerUrl: '',
            // vectorBaseLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            // imageBaseLayer: null,
            // labelBaseLayer: null,
            // vectorBaseLayer: null,

            imageBaseLayerUrl: 'http://localhost:9000/{z}/{x}/{y}.png',
            labelBaseLayerUrl: 'http://localhost:9200/{z}/{x}/{y}.png',
            vectorBaseLayerUrl: 'http://localhost:9001/{z}/{x}/{y}.png',
            leanBoundLayerUrl: 'resources/kml/lean.kml',
            imageBaseLayer: null,
            labelBaseLayer: null,
            vectorBaseLayer: null,
            //乐安县界
            leanBoundLayer: null
        },
        layout: {
            //工具栏面板
            mapToolPanel: null,
            //底图面板
            layerSwitcherPanel: null,
            //图例面板
            legendPanel: null,
            //业务操作面板
            businessPanel: null,
            //图层目录面板
            catalogPanel: null,
            //底图面板参数
            layerSwitcherParams: {
                gapX: 52,
                gapY: 50,//40,
                //bottomY: 0,
                w: 172,//数值或百分比，如：100%
                h: 60,//数值或百分比，如：100%
                align: 'tr'
            },
            //图例面板参数
            legendParams: {
                gapX: 500,
                gapY: 10,//40,
                //bottomY: 0,
                w: 160,//数值或百分比，如：100%
                h: 200,//数值或百分比，如：100%
                align: 'br'
            },
            //业务操作面板参数
            businessParams: {
                gapX: 10,
                gapY: 10,//40,
                //bottomY: 80,
                w: 480,//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tr'
            },
            //图层目录面板参数
            catalogParams: {
                gapX: 10,
                gapY: 10,//40,
                w: 200,//数值或百分比，如：100%
                h: 330,//数值或百分比，如：100%
                align: 'tl'
            },
            //地图工具栏面板参数
            mapToolPanelParams: {
                gapX: 52,
                gapY: 10,
                //w: 200,//数值或百分比，如：100%
                h: 32,//数值或百分比，如：100%
                align: 'tr'
            }
        },
        catalog: [
            {
                text: '水库',
                key: 'reservoir',
                iconCls: 'iconfont icon-dazhongxingshuiku',
                checked: true,
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
    }
);
let conf = new jxapp.AppConfig();