import { angleToRadian } from "./../util";
export default class Bow {
    constructor(data) {
        this.data = data;
    }
    updateStart(start) {
        this.data.start = start;
    }
    updateShape(shape) {
        this.data.shape = shape;
    }
    stroke(ctx) {
        const { start: [x, y], shape: { r, startAngle, endAngle, clockwise } } = this.data;
        ctx.beginPath();
        ctx.arc(x, y, r, angleToRadian(startAngle), angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
        ctx.closePath();
        ctx.stroke();
    }
    fill(ctx) {
        const { start: [x, y], shape: { r, startAngle, endAngle, clockwise } } = this.data;
        ctx.beginPath();
        ctx.arc(x, y, r, angleToRadian(startAngle), angleToRadian(endAngle), clockwise === undefined ? false : !clockwise);
        ctx.fill();
    }
}
