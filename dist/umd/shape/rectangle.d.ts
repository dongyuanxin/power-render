import { AbstractShape, Point } from "./index";
interface RectangleShapeScheme {
    height: number;
    width: number;
}
declare class Rectangle implements AbstractShape {
    private data;
    constructor(data: {
        start: Point;
        shape: RectangleShapeScheme;
    });
    updateStart(point: Point): void;
    updateShape(shape: RectangleShapeScheme): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export default Rectangle;
