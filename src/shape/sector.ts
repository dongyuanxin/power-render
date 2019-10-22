import { AbstractShape, TwoDCoordinate } from "./index";
import { angleToRadian } from "./../util";

interface SectorShapeScheme {
  r: number;
  startAngle: number;
  endAngle: number;
  clockwise?: boolean;
}

interface SectorData {
  start: TwoDCoordinate;
  shape: SectorShapeScheme;
}

export default class Sector implements AbstractShape {
  private data: SectorData;

  constructor(data: SectorData) {
    this.data = data;
  }

  updateData(data: SectorData) {
    this.data = {
      ...this.data,
      ...data
    };
  }

  stroke(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { r, startAngle, endAngle, clockwise }
    } = this.data;

    ctx.beginPath();
    ctx.moveTo(x, y);
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
    ctx.moveTo(x, y);
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
