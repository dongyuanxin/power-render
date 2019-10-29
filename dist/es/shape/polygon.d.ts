import { AbstractShape, TwoDCoordinate } from "./index";
interface PolygonShapeScheme {
    r: number;
    side: number;
}
interface PolygonData {
    start: TwoDCoordinate;
    shape: PolygonShapeScheme;
}
export default class Polygon implements AbstractShape {
    private data;
    constructor(data: PolygonData);
    updateStart(start: TwoDCoordinate): void;
    updateShape(shape: PolygonShapeScheme): void;
    private draw;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export {};
