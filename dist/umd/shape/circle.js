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
    class Circle {
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
            const { start: [x, y], shape: { r } } = this.data;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, util_1.angleToRadian(360));
            ctx.stroke();
            ctx.closePath();
        }
        fill(ctx) {
            const { start: [x, y], shape: { r } } = this.data;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, util_1.angleToRadian(360));
            ctx.fill();
        }
    }
    exports.default = Circle;
});
