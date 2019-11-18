(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Canvas支持路径(path)和矩形(rect)的绘制:
     *  https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
     */
    class Rectangle {
        constructor(data) {
            this.data = data;
        }
        updateStart(TwoDCoordinate) {
            this.data.start = TwoDCoordinate;
        }
        updateShape(shape) {
            this.data.shape = shape;
        }
        stroke(ctx) {
            const { start: [x, y], shape: { width, height } } = this.data;
            ctx.strokeRect(x, y, width, height);
        }
        fill(ctx) {
            const { start: [x, y], shape: { width, height } } = this.data;
            ctx.fillRect(x, y, width, height);
        }
    }
    exports.default = Rectangle;
});
