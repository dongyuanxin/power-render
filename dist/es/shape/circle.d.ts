import { AbstractShape, TwoDCoordinate } from "./index";
interface CircleShapeScheme {
    r: number;
}
interface CircleData {
    start: TwoDCoordinate;
    shape: CircleShapeScheme;
}
export default class Circle implements AbstractShape {
    private data;
    constructor(data: CircleData);
    updateStart(TwoDCoordinate: TwoDCoordinate): void;
    updateShape(shape: CircleShapeScheme): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export {};
