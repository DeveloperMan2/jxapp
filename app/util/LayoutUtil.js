/**
 * Created by winnerlbm on 2018/7/17.
 */
Ext.define('jxapp.util.LayoutUtil', {
    layoutContainers: [],
    //create  dock button for panel and bind it in the panel.
    createDock4Panel: function (parentId, relatedPanel, relatedFloatParams) {
        let parentContainer = Ext.getDom(parentId);
        if (relatedPanel) {
            if (relatedPanel['dockButton'] == null) {
                relatedPanel['dockButton'] = Ext.create('Ext.panel.Panel', {
                    renderTo: parentContainer,
                    baseCls: 'commonPanelBaseCls',
                    hidden: true,
                    floating: true,
                    border: false,
                    shadow: false,
                    collapsible: false,
                    plain: true,
                    draggable: false,
                    constrain: true,
                    simpleDrag: true,
                    closable: false,
                    closeAction: 'hide',
                    closeToolText: '关闭',
                    height: 32,
                    width: 32,
                    bodyPadding: 0,
                    items: [
                        {
                            xtype: 'button',
                            ui: 'common-button-ui',
                            tooltip: relatedPanel['title'],
                            iconCls: relatedPanel['iconCls'],
                            width: 32,
                            height: 32,
                            margin: '0 0 0 0',
                            listeners: {
                                click: function () {
                                    relatedPanel.show();
                                    loUtil.refreshLayout(relatedPanel, relatedPanel['dockOption']);
                                    relatedPanel['dockButton'].hide();

                                    //临时增加相关逻辑控制
                                    if (conf.layout.layerSwitcherPanel && conf.layout.mapToolPanel) {
                                        conf.layout.layerSwitcherParams.gapX = conf.layout.mapToolPanelParams.gapX = 500;
                                        loUtil.refreshLayout(conf.layout.layerSwitcherPanel, conf.layout.layerSwitcherParams);
                                        loUtil.refreshLayout(conf.layout.mapToolPanel, conf.layout.mapToolPanelParams);
                                    }
                                }
                            }
                        }
                    ]
                });
            }

            //计算停靠位置
            let dockFloatParams = {};
            for (let key in relatedFloatParams) {
                dockFloatParams[key] = relatedFloatParams[key];
            }
            //默认大小32*32
            dockFloatParams['w'] = 32;
            dockFloatParams['h'] = 32;
            loUtil.relayoutPanel(parentContainer, relatedPanel['dockButton'], dockFloatParams);
        }
    },

    //show dock button
    showDockButton: function (panel) {
        panel.hide();
        if (panel['dockButton']) {
            panel['dockButton'].setHidden(false);

            let relatedFloatParams = panel['dockOption'];
            let dockFloatParams = {};
            for (let key in relatedFloatParams) {
                dockFloatParams[key] = relatedFloatParams[key];
            }
            //默认大小32*32
            dockFloatParams['w'] = 32;
            dockFloatParams['h'] = 32;

            loUtil.refreshLayout(panel['dockButton'], dockFloatParams);
        }
    },
    //添加到布局容器中
    addToLayoutContainer: function (parentContainer, childContainer, floatParams) {
        //添加到布局容器中
        let isExist = false;
        if (this.layoutContainers && this.layoutContainers.length > 0) {
            for (let i = 0; i < this.layoutContainers.length; i++) {
                let temp = this.layoutContainers[i];
                if (temp && temp['container']['id'] === childContainer['id']) {
                    isExist = true;
                    return false;
                }
            }
        }
        if (!isExist) {
            this.layoutContainers.push({
                parentContainer: parentContainer,
                container: childContainer,
                params: floatParams
            });
        }
    },

    //根据面板参数重新布局------------------------------
    relayoutPanel: function (parentContainer, childContainer, floatParams) {
        if (parentContainer && childContainer && floatParams) {
            this.addToLayoutContainer(parentContainer, childContainer, floatParams);
            let w = floatParams['w'];
            let h = floatParams['h'];
            if (w == void 0 && childContainer.getWidth(w) != 2) {
                w = childContainer.getWidth();
            }
            if (h == void 0 && childContainer.getHeight(h) != 2) {
                h = childContainer.getHeight();
            }

            let align = floatParams['align'];
            let offsetX = floatParams['gapX'];
            let offsetY = floatParams['gapY'];
            let bottomOffsetY = floatParams['bottomY'];

            if (w && typeof (w) == 'string' && w.indexOf('%') > -1) {
                w = parentContainer.clientWidth * parseFloat(w.substr(0, w.indexOf('%'))) / 100 - 2 * offsetX;
            }

            if (h && typeof (h) == 'string' && h.indexOf('%') > -1) {
                if (bottomOffsetY == null) {
                    h = parentContainer.clientHeight * parseFloat(h.substr(0, h.indexOf('%'))) / 100 - 2 * offsetY;
                } else {
                    h = parentContainer.clientHeight * parseFloat(h.substr(0, h.indexOf('%'))) / 100 - offsetY - bottomOffsetY;
                }
            }
            if (w !== void 0) {
                childContainer.setWidth(w);
            }
            if (h !== void 0) {
                childContainer.setHeight(h);
            }


            switch (align) {
                case 'tl': {
                    childContainer.el.alignTo(parentContainer, "tl?", [offsetX, offsetY], false);
                    break;
                }
                case 'bl': {
                    if (bottomOffsetY != null) {
                        offsetY = parentContainer.clientHeight - h - bottomOffsetY;
                    } else {
                        offsetY = parentContainer.clientHeight - h - offsetY;
                    }

                    childContainer.el.alignTo(parentContainer, "tl?", [offsetX, offsetY], false);
                    break;
                }
                case 'tr': {
                    offsetX = parentContainer.clientWidth - offsetX - w;
                    childContainer.el.alignTo(parentContainer, "tl?", [offsetX, offsetY], false);
                    break;
                }
                case 'br': {
                    offsetX = parentContainer.clientWidth - offsetX - w;
                    if (bottomOffsetY != null) {
                        offsetY = parentContainer.clientHeight - h - bottomOffsetY;
                    } else {
                        offsetY = parentContainer.clientHeight - h - offsetY;
                    }
                    childContainer.el.alignTo(parentContainer, "tl?", [offsetX, offsetY], false);
                    break;
                }
            }
        }
    },

    //★★★★★★浮动面板整体刷新，布局核心功能--------------------------
    refreshLayout: function (specialPanel, specialParams) {
        if (specialPanel == null) {
            if (this.layoutContainers && this.layoutContainers.length > 0) {
                for (let i = 0; i < this.layoutContainers.length; i++) {
                    let temp = this.layoutContainers[i];
                    let parentContainer = temp['parentContainer'],
                        childContainer = temp['container'],
                        floatParams = temp['params'];
                    if (!childContainer.isHidden()) {
                        this.relayoutPanel(parentContainer, childContainer, floatParams);
                    }
                }
            }
        } else {
            if (this.layoutContainers && this.layoutContainers.length > 0) {
                for (let i = 0; i < this.layoutContainers.length; i++) {
                    let temp = this.layoutContainers[i];
                    let parentContainer = temp['parentContainer'],
                        childContainer = temp['container'],
                        floatParams = temp['params'];
                    if (specialParams != null) {
                        floatParams = specialParams;
                    }
                    if (specialPanel === childContainer) {
                        this.relayoutPanel(parentContainer, childContainer, floatParams);
                        return false;
                    }
                }
            }
        }
    },
    //----------------------------全屏相关----------------------------------------------
    //全屏显示
    fullScreen: function () {
        let docElm = document.documentElement;
        //W3C
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }

        //FireFox
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }

        //Chrome等
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }

        //IE11
        else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    },
    //退出全屏
    exitFullScreen: function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});

let loUtil = new jxapp.util.LayoutUtil();