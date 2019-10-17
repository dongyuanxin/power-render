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
    var Triangle = /** @class */ (function () {
        function Triangle(data) {
            this.data = {
                points: data.points
            };
        }
        Triangle.prototype.updatePoints = function (points) {
            this.data.points = points;
        };
        Triangle.prototype.stroke = function (ctx) {
            var points = this.data.points;
            ctx.beginPath();
            ctx.moveTo.apply(ctx, points[0]);
            ctx.lineTo.apply(ctx, points[1]);
            ctx.lineTo.apply(ctx, points[2]);
            ctx.lineTo.apply(ctx, points[0]);
            ctx.stroke();
            ctx.closePath();
        };
        Triangle.prototype.fill = function (ctx) {
            var points = this.data.points;
            ctx.beginPath();
            ctx.moveTo.apply(ctx, points[0]);
            ctx.lineTo.apply(ctx, points[1]);
            ctx.lineTo.apply(ctx, points[2]);
            ctx.fill();
        };
        return Triangle;
    }());
    exports.default = Triangle;
});
