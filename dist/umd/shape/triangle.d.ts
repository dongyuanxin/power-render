import { AbstractShape, TwoDCoordinate } from "./index";
declare class Triangle implements AbstractShape {
    private data;
    constructor(data: {
        points: TwoDCoordinate[];
    });
    updatePoints(points: TwoDCoordinate[]): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export default Triangle;
