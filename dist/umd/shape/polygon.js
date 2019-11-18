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
    class Polygon {
        constructor(data) {
            this.data = data;
        }
        updateStart(start) {
            this.data.start = start;
        }
        updateShape(shape) {
            this.data.shape = shape;
        }
        draw(ctx) {
            const { start: [x, y], shape: { r, side } } = this.data;
            const sideRadian = util_1.angleToRadian(360) / side; // 每条边对应的弧度
            ctx.beginPath();
            const startX = x, startY = y + r;
            ctx.moveTo(startX, startY);
            for (let i = 1; i < side; ++i) {
                const nextX = x + r * Math.sin(sideRadian * i);
                const nextY = y + r * Math.cos(sideRadian * i);
                ctx.lineTo(nextX, nextY);
            }
            ctx.lineTo(startX, startY);
            ctx.closePath();
        }
        stroke(ctx) {
            this.draw(ctx);
            ctx.stroke();
        }
        fill(ctx) {
            this.draw(ctx);
            ctx.fill();
        }
    }
    exports.default = Polygon;
});
