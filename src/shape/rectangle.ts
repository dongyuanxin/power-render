import { AbstractShape, Point } from "./index";

interface RectangleShapeScheme {
  height: number;
  width: number;
}

interface RectangleData {
  start: Point;
  shape: RectangleShapeScheme;
}

class Rectangle implements AbstractShape {
  private data: RectangleData;

  constructor(data: { start: Point; shape: RectangleShapeScheme }) {
    this.data = data;
  }

  updateStart(point: Point) {
    this.data.start = point;
  }

  updateShape(shape: RectangleShapeScheme) {
    this.data.shape = shape;
  }

  stroke(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { width, height }
    } = this.data;
    ctx.strokeRect(x, y, width, height);
  }

  fill(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { width, height }
    } = this.data;
    ctx.fillRect(x, y, width, height);
  }
}

export default Rectangle;
