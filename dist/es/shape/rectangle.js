var Rectangle = /** @class */ (function () {
    function Rectangle(data) {
        this.data = data;
    }
    Rectangle.prototype.updateStart = function (point) {
        this.data.start = point;
    };
    Rectangle.prototype.updateShape = function (shape) {
        this.data.shape = shape;
    };
    Rectangle.prototype.stroke = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, width = _c.width, height = _c.height;
        ctx.strokeRect(x, y, width, height);
    };
    Rectangle.prototype.fill = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, width = _c.width, height = _c.height;
        ctx.fillRect(x, y, width, height);
    };
    return Rectangle;
}());
export default Rectangle;
