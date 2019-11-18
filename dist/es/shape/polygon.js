import { angleToRadian } from "./../util";
export default class Polygon {
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
        const sideRadian = angleToRadian(360) / side; // 每条边对应的弧度
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
