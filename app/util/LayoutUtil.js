/**
 * Created by winnerlbm on 2018/7/17.
 */
Ext.define('jxapp.util.LayoutUtil', {
    layoutContainers: [],
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

            childContainer.setWidth(w);
            childContainer.setHeight(h);

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