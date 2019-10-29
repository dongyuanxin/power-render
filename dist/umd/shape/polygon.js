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
    var Polygon = /** @class */ (function () {
        function Polygon(data) {
            this.data = data;
        }
        Polygon.prototype.updateStart = function (start) {
            this.data.start = start;
        };
        Polygon.prototype.updateShape = function (shape) {
            this.data.shape = shape;
        };
        Polygon.prototype.draw = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, r = _c.r, side = _c.side;
            var sideRadian = util_1.angleToRadian(360) / side; // 每条边对应的弧度
            ctx.beginPath();
            var startX = x, startY = y + r;
            ctx.moveTo(startX, startY);
            for (var i = 1; i < side; ++i) {
                var nextX = x + r * Math.sin(sideRadian * i);
                var nextY = y + r * Math.cos(sideRadian * i);
                ctx.lineTo(nextX, nextY);
            }
            ctx.lineTo(startX, startY);
            ctx.closePath();
        };
        Polygon.prototype.stroke = function (ctx) {
            this.draw(ctx);
            ctx.stroke();
        };
        Polygon.prototype.fill = function (ctx) {
            this.draw(ctx);
            ctx.fill();
        };
        return Polygon;
    }());
    exports.default = Polygon;
});
