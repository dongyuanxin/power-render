export interface AbstractShape {
  stroke(CanvasRenderingContext2D): void;
  fill(CanvasRenderingContext2D): void;
}

export type Point = [number, number];

export { default as Triangle } from "./triangle";
