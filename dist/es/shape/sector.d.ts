import { AbstractShape, TwoDCoordinate } from "./index";
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
    private data;
    constructor(data: SectorData);
    updateData(data: SectorData): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export {};
