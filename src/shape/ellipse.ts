import { AbstractShape, TwoDCoordinate } from "./index";

interface EllipseShapeScheme {
  a: number;
  b: number;
}

interface EllipseData {
  start: TwoDCoordinate;
  shape: EllipseShapeScheme;
  method?: "iterate" | "scale";
}

export default class Ellipse implements AbstractShape {
  private data: EllipseData;

  constructor(data: EllipseData) {
    this.data = data;
    if (!data.method) {
      data.method = "scale";
    }
  }

  private scaleDraw(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { a, b }
    } = this.data;
    const r = a > b ? a : b;
    const rateX = a / r;
    const rateY = b / r;

    ctx.save();
    // scale 缩放是针对坐标上的所有元素点
    // 对于坐标轴，缩放后视觉上位置会改变
    // 因此需要在 arc 绘制的时候再计算新的 (x, y)
    ctx.scale(rateX, rateY);

    ctx.beginPath();
    ctx.arc(x / rateX, y / rateY, r, 0, 2 * Math.PI);
    ctx.closePath();

    ctx.restore();
  }

  private iterDraw(ctx: CanvasRenderingContext2D) {
    const {
      start: [x, y],
      shape: { a, b }
    } = this.data;

    const step = a > b ? 1 / a : 1 / b;
    ctx.beginPath();
    ctx.moveTo(x + a, y);
    for (let i = 0; i < 2 * Math.PI; i += step) {
      ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
    }
    ctx.closePath();
  }

  private draw(ctx: CanvasRenderingContext2D) {
    const { method } = this.data;
    switch (method) {
      case "iterate":
        return this.iterDraw(ctx);
      default:
        return this.scaleDraw(ctx);
    }
  }

  public stroke(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
    ctx.stroke();
  }

  public fill(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
    ctx.stroke;
  }
}
