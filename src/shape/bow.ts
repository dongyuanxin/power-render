import { AbstractShape, TwoDCoordinate } from "./index";
import { angleToRadian } from "./../util";
import { SectorShapeScheme } from "./sector";

type BowShapeScheme = SectorShapeScheme;

interface BowData {
  start: TwoDCoordinate;
  shape: BowShapeScheme;
}

export default class Bow implements AbstractShape {
  private data: BowData;

  constructor(data: BowData) {
    this.data = data;
  }

  updateStart(start: TwoDCoordinate) {
    this.data.start = start;
  }

  updateShape(shape: BowShapeScheme) {
    this.data.shape = shape;
  }

  stroke(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { r, startAngle, endAngle, clockwise }
    } = this.data;

    ctx.beginPath();
    ctx.arc(
      x,
      y,
      r,
      angleToRadian(startAngle),
      angleToRadian(endAngle),
      clockwise === undefined ? false : !clockwise
    );
    ctx.closePath();
    ctx.stroke();
  }

  fill(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { r, startAngle, endAngle, clockwise }
    } = this.data;

    ctx.beginPath();
    ctx.arc(
      x,
      y,
      r,
      angleToRadian(startAngle),
      angleToRadian(endAngle),
      clockwise === undefined ? false : !clockwise
    );
    ctx.fill();
  }
}
