import { AbstractShape, TwoDCoordinate } from "./index";
export interface SectorShapeScheme {
    r: number;
    startAngle: number;
    endAngle: number;
    clockwise?: boolean;
}
export interface SectorData {
    start: TwoDCoordinate;
    shape: SectorShapeScheme;
}
export default class Sector implements AbstractShape {
    private data;
    constructor(data: SectorData);
    updateStart(start: TwoDCoordinate): void;
    updateShape(shape: SectorShapeScheme): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
