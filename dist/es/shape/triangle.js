var Triangle = /** @class */ (function () {
    function Triangle(data) {
        this.data = {
            points: data.points
        };
    }
    Triangle.prototype.updatePoints = function (points) {
        this.data.points = points;
    };
    Triangle.prototype.stroke = function (ctx) {
        var points = this.data.points;
        ctx.beginPath();
        ctx.moveTo.apply(ctx, points[0]);
        ctx.lineTo.apply(ctx, points[1]);
        ctx.lineTo.apply(ctx, points[2]);
        ctx.lineTo.apply(ctx, points[0]);
        ctx.stroke();
        ctx.closePath();
    };
    Triangle.prototype.fill = function (ctx) {
        var points = this.data.points;
        ctx.beginPath();
        ctx.moveTo.apply(ctx, points[0]);
        ctx.lineTo.apply(ctx, points[1]);
        ctx.lineTo.apply(ctx, points[2]);
        ctx.fill();
    };
    return Triangle;
}());
export default Triangle;
