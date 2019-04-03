/**
 * Created by winnerlbm on 2019/3/13.
 */
Ext.define('jxapp.view.layerswitcher.LayerSwitcherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layerswitcher',

    /**
     * Called when the view is created
     */
    init: function () {
    },
    wrapButtonClick: function (btn) {
        let action = btn['action'];
        if (action === 'vector') {
            if (conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(true, false);
                conf.map.mapParams.isImageActivate = false;
            }
        } else {
            if (!conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(false, true);
                conf.map.mapParams.isImageActivate = true;
            }
        }

        mapUtil.switchBaseLayer(action);
    },
    wrapButtonMouseOver: function (btn) {
        let action = btn['action'];
        if (action === 'vector') {
            if (conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(true, true);
            } else {
                this.changeBaseLayerState(true, false);
            }
        } else {
            if (conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(false, true);
            } else {
                this.changeBaseLayerState(true, true);
            }
        }

    },
    wrapButtonMouseOut: function (btn) {
        let action = btn['action'];
        if (action === 'vector') {
            if (conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(false, true);
            } else {
                this.changeBaseLayerState(true, false);
            }
        } else {
            if (conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(false, true);
            } else {
                this.changeBaseLayerState(true, false);
            }
        }

    },
    labelButtonClick: function (btn) {
        let action = btn['action'];
        if (action === 'vector') {
            if (conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(true, false);
                conf.map.mapParams.isImageActivate = false;
            }
        } else {
            if (!conf.map.mapParams.isImageActivate) {
                this.changeBaseLayerState(false, true);
                conf.map.mapParams.isImageActivate = true;
            }
        }

        mapUtil.switchBaseLayer(action);
    },
    //动态调整底图切换图标状态
    changeBaseLayerState: function (isVector, isImage) {
        let vectorBtn = Ext.getCmp('baselayer-vector-id');
        let imageBtn = Ext.getCmp('baselayer-image-id');
        vectorBtn.toggle(isVector);
        imageBtn.toggle(isImage);
    }
});