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
    const util_1 = require("./../util");
    class Bow {
        constructor(data) {
            this.data = data;
        }
        updateStart(start) {
            this.data.start = start;
        }
        updateShape(shape) {
            this.data.shape = shape;
        }
        stroke(ctx) {
            const { start: [x, y], shape: { r, startAngle, endAngle, clockwise } } = this.data;
            ctx.beginPath();
            ctx.arc(x, y, r, util_1.angleToRadian(startAngle), util_1.angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
            ctx.closePath();
            ctx.stroke();
        }
        fill(ctx) {
            const { start: [x, y], shape: { r, startAngle, endAngle, clockwise } } = this.data;
            ctx.beginPath();
            ctx.arc(x, y, r, util_1.angleToRadian(startAngle), util_1.angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
            ctx.fill();
        }
    }
    exports.default = Bow;
});
