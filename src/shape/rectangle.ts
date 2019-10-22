import { AbstractShape, TwoDCoordinate } from "./index";

interface RectangleShapeScheme {
  height: number;
  width: number;
}

interface RectangleData {
  start: TwoDCoordinate;
  shape: RectangleShapeScheme;
}

/**
 * Canvas支持路径(path)和矩形(rect)的绘制:
 *  https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
 */
class Rectangle implements AbstractShape {
  private data: RectangleData;

  constructor(data: { start: TwoDCoordinate; shape: RectangleShapeScheme }) {
    this.data = data;
  }

  updateStart(TwoDCoordinate: TwoDCoordinate) {
    this.data.start = TwoDCoordinate;
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
