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
    class Ellipse {
        constructor(data) {
            this.data = data;
            if (!data.method) {
                data.method = "scale";
            }
        }
        updateStart(start) {
            this.data.start = start;
        }
        updateShape(shape) {
            this.data.shape = shape;
        }
        updateMethod(method) {
            this.data.method = method;
        }
        scaleDraw(ctx) {
            const { start: [x, y], shape: { a, b } } = this.data;
            const r = a > b ? a : b;
            const rateX = a / r;
            const rateY = b / r;
            ctx.save();
            // scale 缩放是针对坐标上的所有元素点
            // 对于坐标轴，缩放后视觉上位置会改变
            // 因此需要在 arc 绘制的时候再计算新的 (x, y)
            ctx.scale(rateX, rateY);
            ctx.beginPath();
            ctx.arc(x / rateX, y / rateY, r, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.restore();
        }
        iterDraw(ctx) {
            const { start: [x, y], shape: { a, b } } = this.data;
            const step = a > b ? 1 / a : 1 / b;
            ctx.beginPath();
            ctx.moveTo(x + a, y);
            for (let i = 0; i < 2 * Math.PI; i += step) {
                ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
            }
            ctx.closePath();
        }
        draw(ctx) {
            const { method } = this.data;
            switch (method) {
                case "iterate":
                    return this.iterDraw(ctx);
                default:
                    return this.scaleDraw(ctx);
            }
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
    exports.default = Ellipse;
});
