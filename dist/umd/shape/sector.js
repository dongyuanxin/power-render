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
    var Sector = /** @class */ (function () {
        function Sector(data) {
            this.data = data;
        }
        Sector.prototype.updateStart = function (start) {
            this.data.start = start;
        };
        Sector.prototype.updateShape = function (shape) {
            this.data.shape = shape;
        };
        Sector.prototype.stroke = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, r = _c.r, startAngle = _c.startAngle, endAngle = _c.endAngle, clockwise = _c.clockwise;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, r, util_1.angleToRadian(startAngle), util_1.angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
            ctx.closePath();
            ctx.stroke();
        };
        Sector.prototype.fill = function (ctx) {
            var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, r = _c.r, startAngle = _c.startAngle, endAngle = _c.endAngle, clockwise = _c.clockwise;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, r, util_1.angleToRadian(startAngle), util_1.angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
            ctx.fill();
        };
        return Sector;
    }());
    exports.default = Sector;
});
