import { AbstractShape, TwoDCoordinate } from "./index";

interface TriangleData {
  points: TwoDCoordinate[];
}

class Triangle implements AbstractShape {
  private data: TriangleData;

  constructor(data: { points: TwoDCoordinate[] }) {
    this.data = {
      points: data.points
    };
  }

  updatePoints(points: TwoDCoordinate[]) {
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
