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
    var Rectangle = /** @class */ (function () {
        function Rectangle(data) {
            this.data = data;
        }
        Rectangle.prototype.updateStart = function (TwoDCoordinate) {
            this.data.start = TwoDCoordinate;
        };
        Rectangle.prototype.updateShape = function (shape) {
            this.data.shape = shape;
        };
        Rectangle.prototype.stroke = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, width = _c.width, height = _c.height;
            ctx.strokeRect(x, y, width, height);
        };
        Rectangle.prototype.fill = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, width = _c.width, height = _c.height;
            ctx.fillRect(x, y, width, height);
        };
        return Rectangle;
    }());
    exports.default = Rectangle;
});
