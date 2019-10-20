export interface AbstractShape {
    stroke(CanvasRenderingContext2D: any): void;
    fill(CanvasRenderingContext2D: any): void;
}
export declare type Point = [number, number];
export { default as Triangle } from "./triangle";
export { default as Rectangle } from "./rectangle";
