/**
 * Created by winnerlbm on 2018/6/12.
 */
Ext.define('jxapp.util.ChartUtil', {
    //根据配置生成chart
    generateChart: function (id, opts) {
        let chart = echarts.init(Ext.getDom(id), 'light');
        chart.setOption(opts);
        return chart;
    },
    //更新统计图尺寸
    resizeChart: function (chartInstance, width, height) {
        if (chartInstance) {
            chartInstance.resize(width, height);
        }
    }
});
let chartUtil = new jxapp.util.ChartUtil();