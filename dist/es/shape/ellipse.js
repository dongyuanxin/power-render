var Ellipse = /** @class */ (function () {
    function Ellipse(data) {
        this.data = data;
        if (!data.method) {
            data.method = "scale";
        }
    }
    Ellipse.prototype.updateStart = function (start) {
        this.data.start = start;
    };
    Ellipse.prototype.updateShape = function (shape) {
        this.data.shape = shape;
    };
    Ellipse.prototype.updateMethod = function (method) {
        this.data.method = method;
    };
    Ellipse.prototype.scaleDraw = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, a = _c.a, b = _c.b;
        var r = a > b ? a : b;
        var rateX = a / r;
        var rateY = b / r;
        ctx.save();
        // scale 缩放是针对坐标上的所有元素点
        // 对于坐标轴，缩放后视觉上位置会改变
        // 因此需要在 arc 绘制的时候再计算新的 (x, y)
        ctx.scale(rateX, rateY);
        ctx.beginPath();
        ctx.arc(x / rateX, y / rateY, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.restore();
    };
    Ellipse.prototype.iterDraw = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, a = _c.a, b = _c.b;
        var step = a > b ? 1 / a : 1 / b;
        ctx.beginPath();
        ctx.moveTo(x + a, y);
        for (var i = 0; i < 2 * Math.PI; i += step) {
            ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
        }
        ctx.closePath();
    };
    Ellipse.prototype.draw = function (ctx) {
        var method = this.data.method;
        switch (method) {
            case "iterate":
                return this.iterDraw(ctx);
            default:
                return this.scaleDraw(ctx);
        }
    };
    Ellipse.prototype.stroke = function (ctx) {
        this.draw(ctx);
        ctx.stroke();
    };
    Ellipse.prototype.fill = function (ctx) {
        this.draw(ctx);
        ctx.fill();
    };
    return Ellipse;
}());
export default Ellipse;
