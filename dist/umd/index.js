(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./shape/index", "./util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Shape = require("./shape/index");
    exports.Shape = Shape;
    const util_1 = require("./util");
    class PowerRender {
        constructor(container) {
            this.layers = {};
            if (typeof container === "string") {
                this.container = document.querySelector(container);
            }
            else {
                this.container = container;
            }
            this.ctx = this.container.getContext("2d");
            this.layers[0] = this.getLayer(0);
        }
        getLayer(zindex) {
            if (!this.layers[zindex]) {
                const offScreenCanvas = document.createElement("canvas");
                offScreenCanvas.width = this.container.width;
                offScreenCanvas.height = this.container.height;
                this.layers[zindex] = {
                    canvas: offScreenCanvas,
                    ctx: offScreenCanvas.getContext("2d"),
                    contents: []
                };
            }
            return this.layers[zindex];
        }
        add(shape, zindex = 0, method = "fill") {
            const layer = this.getLayer(zindex);
            layer.contents.push({
                shape,
                method
            });
        }
        draw(zindex = 0) {
            const rrZindexes = util_1.findMoreOrEqualThan(Reflect.ownKeys(this.layers), zindex);
            rrZindexes.forEach(rrZindex => {
                const { canvas, contents, ctx } = this.layers[rrZindex];
                contents.forEach(({ shape, method }) => {
                    if (method === "fill") {
                        shape.fill(ctx);
                    }
                    else {
                        shape.stroke(ctx);
                    }
                });
                this.ctx.drawImage(canvas, 0, 0);
            });
        }
    }
    exports.default = PowerRender;
});
