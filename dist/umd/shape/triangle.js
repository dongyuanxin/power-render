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
    class Triangle {
        constructor(data) {
            this.data = {
                points: data.points
            };
        }
        updatePoints(points) {
            this.data.points = points;
        }
        stroke(ctx) {
            const { points } = this.data;
            ctx.beginPath();
            ctx.moveTo(...points[0]);
            ctx.lineTo(...points[1]);
            ctx.lineTo(...points[2]);
            ctx.lineTo(...points[0]);
            ctx.stroke();
            ctx.closePath();
        }
        fill(ctx) {
            const { points } = this.data;
            ctx.beginPath();
            ctx.moveTo(...points[0]);
            ctx.lineTo(...points[1]);
            ctx.lineTo(...points[2]);
            ctx.fill();
        }
    }
    exports.default = Triangle;
});
