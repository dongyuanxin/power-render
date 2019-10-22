import { AbstractShape, TwoDCoordinate } from "./index";
import { SectorShapeScheme } from "./sector";
declare type BowShapeScheme = SectorShapeScheme;
interface BowData {
    start: TwoDCoordinate;
    shape: BowShapeScheme;
}
export default class Bow implements AbstractShape {
    private data;
    constructor(data: BowData);
    updateStart(start: TwoDCoordinate): void;
    updateShape(shape: BowShapeScheme): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export {};
