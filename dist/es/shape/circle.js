import { angleToRadian } from "./../util";
export default class Circle {
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
        ctx.arc(x, y, r, 0, angleToRadian(360));
        ctx.stroke();
        ctx.closePath();
    }
    fill(ctx) {
        const { start: [x, y], shape: { r } } = this.data;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, angleToRadian(360));
        ctx.fill();
    }
}
