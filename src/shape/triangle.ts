import { AbstractShape, Point } from "./index";

interface TriangleData {
  points: Point[];
}

class Triangle implements AbstractShape {
  private data: TriangleData;

  constructor(data: { points: Point[] }) {
    this.data = {
      points: data.points
    };
  }

  updatePoints(points: Point[]) {
    this.data.points = points;
  }

  stroke(ctx: CanvasRenderingContext2D) {
    const { points } = this.data;

    ctx.beginPath();
    ctx.moveTo(...points[0]);
    ctx.lineTo(...points[1]);
    ctx.lineTo(...points[2]);
    ctx.lineTo(...points[0]);
    ctx.stroke();
    ctx.closePath();
  }

  fill(ctx: CanvasRenderingContext2D) {
    const { points } = this.data;

    ctx.beginPath();
    ctx.moveTo(...points[0]);
    ctx.lineTo(...points[1]);
    ctx.lineTo(...points[2]);
    ctx.fill();
  }
}

export default Triangle;
