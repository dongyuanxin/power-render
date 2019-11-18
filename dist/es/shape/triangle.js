class Triangle {
    constructor(data) {
        this.data = {
            points: data.points
        };
    }
    updatePoints(points) {
        this.data.points = points;
    }
    stroke(ctx) {
        const { points } = this.data;
        ctx.beginPath();
        ctx.moveTo(...points[0]);
        ctx.lineTo(...points[1]);
        ctx.lineTo(...points[2]);
        ctx.lineTo(...points[0]);
        ctx.stroke();
        ctx.closePath();
    }
    fill(ctx) {
        const { points } = this.data;
        ctx.beginPath();
        ctx.moveTo(...points[0]);
        ctx.lineTo(...points[1]);
        ctx.lineTo(...points[2]);
        ctx.fill();
    }
}
export default Triangle;
