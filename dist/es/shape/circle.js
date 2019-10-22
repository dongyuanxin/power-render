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
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    };
    Circle.prototype.fill = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], r = _a.shape.r;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    };
    return Circle;
}());
export default Circle;
