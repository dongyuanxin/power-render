export interface AbstractShape {
    stroke(CanvasRenderingContext2D: any): void;
    fill(CanvasRenderingContext2D: any): void;
}
export declare type TwoDCoordinate = [number, number];
export { default as Triangle } from "./triangle";
export { default as Rectangle } from "./rectangle";
export { default as Circle } from "./circle";
export { default as Sector } from "./sector";
export { default as Bow } from "./bow";
export { default as Polygon } from "./polygon";
export { default as Ellipse } from "./ellipse";
