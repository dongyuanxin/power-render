import { AbstractShape, TwoDCoordinate } from "./index";
interface RectangleShapeScheme {
    height: number;
    width: number;
}
/**
 * Canvas支持路径(path)和矩形(rect)的绘制:
 *  https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
 */
declare class Rectangle implements AbstractShape {
    private data;
    constructor(data: {
        start: TwoDCoordinate;
        shape: RectangleShapeScheme;
    });
    updateStart(TwoDCoordinate: TwoDCoordinate): void;
    updateShape(shape: RectangleShapeScheme): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export default Rectangle;
