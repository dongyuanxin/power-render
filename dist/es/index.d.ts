import * as Shape from "./shape/index";
declare type DrawMethod = "stroke" | "fill";
declare class PowerRender {
    private container;
    private ctx;
    private layers;
    constructor(container: string | HTMLCanvasElement);
    private getLayer;
    add(shape: Shape.AbstractShape, method: DrawMethod, zindex?: number): void;
    draw(zindex?: number): void;
    drawAll(except?: number): void;
    clear(zindex?: number): void;
    clearAll(): void;
}
export default PowerRender;
export { Shape };
