import { angleToRadian } from "./../util";
var Bow = /** @class */ (function () {
    function Bow(data) {
        this.data = data;
    }
    Bow.prototype.updateStart = function (start) {
        this.data.start = start;
    };
    Bow.prototype.updateShape = function (shape) {
        this.data.shape = shape;
    };
    Bow.prototype.stroke = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, r = _c.r, startAngle = _c.startAngle, endAngle = _c.endAngle, clockwise = _c.clockwise;
        ctx.beginPath();
        ctx.arc(x, y, r, angleToRadian(startAngle), angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
        ctx.closePath();
        ctx.stroke();
    };
    Bow.prototype.fill = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, r = _c.r, startAngle = _c.startAngle, endAngle = _c.endAngle, clockwise = _c.clockwise;
        ctx.beginPath();
        ctx.arc(x, y, r, angleToRadian(startAngle), angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
        ctx.fill();
    };
    return Bow;
}());
export default Bow;
