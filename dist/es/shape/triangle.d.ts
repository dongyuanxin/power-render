import { AbstractShape, Point } from "./index";
declare class Triangle implements AbstractShape {
    private data;
    constructor(data: {
        points: Point[];
    });
    updatePoints(points: Point[]): void;
    stroke(ctx: CanvasRenderingContext2D): void;
    fill(ctx: CanvasRenderingContext2D): void;
}
export default Triangle;
