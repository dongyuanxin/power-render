import { AbstractShape, TwoDCoordinate } from "./index";
import { angleToRadian } from "./../util";

interface CircleShapeScheme {
  r: number;
}

interface CircleData {
  start: TwoDCoordinate;
  shape: CircleShapeScheme;
}

export default class Circle implements AbstractShape {
  private data: CircleData;

  constructor(data: CircleData) {
    this.data = data;
  }

  updateStart(TwoDCoordinate: TwoDCoordinate) {
    this.data.start = TwoDCoordinate;
  }

  updateShape(shape: CircleShapeScheme) {
    this.data.shape = shape;
  }

  stroke(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { r }
    } = this.data;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, angleToRadian(360));
    ctx.stroke();
    ctx.closePath();
  }

  fill(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { r }
    } = this.data;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, angleToRadian(360));
    ctx.fill();
  }
}
