import { angleToRadian } from "./../util";
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
        ctx.arc(x, y, r, angleToRadian(startAngle), angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
        ctx.closePath();
        ctx.stroke();
    };
    Sector.prototype.fill = function (ctx) {
        var _a = this.data, _b = _a.start, x = _b[0], y = _b[1], _c = _a.shape, r = _c.r, startAngle = _c.startAngle, endAngle = _c.endAngle, clockwise = _c.clockwise;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, r, angleToRadian(startAngle), angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
        ctx.fill();
    };
    return Sector;
}());
export default Sector;
