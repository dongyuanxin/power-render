import { AbstractShape, TwoDCoordinate } from "./index";
import { angleToRadian } from "./../util";

interface PolygonShapeScheme {
  r: number;
  side: number;
}

interface PolygonData {
  start: TwoDCoordinate;
  shape: PolygonShapeScheme;
}

export default class Polygon implements AbstractShape {
  private data: PolygonData;

  constructor(data: PolygonData) {
    this.data = data;
  }

  public updateStart(start: TwoDCoordinate) {
    this.data.start = start;
  }

  public updateShape(shape: PolygonShapeScheme) {
    this.data.shape = shape;
  }

  private draw(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { r, side }
    } = this.data;
    const sideRadian = angleToRadian(360) / side; // 每条边对应的弧度

    ctx.beginPath();

    const startX = x,
      startY = y + r;
    ctx.moveTo(startX, startY);

    for (let i = 1; i < side; ++i) {
      const nextX = x + r * Math.sin(sideRadian * i);
      const nextY = y + r * Math.cos(sideRadian * i);
      ctx.lineTo(nextX, nextY);
    }
    ctx.lineTo(startX, startY);

    ctx.closePath();
  }

  public stroke(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
    ctx.stroke();
  }

  public fill(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
    ctx.fill();
  }
}
