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
    private data;
    constructor(data: EllipseData);
    updateStart(start: TwoDCoordinate): void;
    updateShape(shape: EllipseShapeScheme): void;
    updateMethod(method: "iterate" | "scale"): void;
    private scaleDraw;
    private iterDraw;
    private draw;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export {};
