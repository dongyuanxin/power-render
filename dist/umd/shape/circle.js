(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./../util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("./../util");
    var Circle = /** @class */ (function () {
        function Circle(data) {
            this.data = data;
        }
        Circle.prototype.updateStart = function (TwoDCoordinate) {
            this.data.start = TwoDCoordinate;
        };
        Circle.prototype.updateShape = function (shape) {
            this.data.shape = shape;
        };
        Circle.prototype.stroke = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], r = _a.shape.r;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, util_1.angleToRadian(360));
            ctx.stroke();
            ctx.closePath();
        };
        Circle.prototype.fill = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], r = _a.shape.r;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, util_1.angleToRadian(360));
            ctx.fill();
        };
        return Circle;
    }());
    exports.default = Circle;
});
