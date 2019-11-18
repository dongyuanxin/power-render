import * as Shape from "./shape/index";
declare type DrawMethod = "stroke" | "fill";
declare class PowerRender {
    private container;
    private ctx;
    private layers;
    constructor(container: string | HTMLCanvasElement);
    private getLayer;
    add(shape: Shape.AbstractShape, zindex?: number, method?: DrawMethod): void;
    draw(zindex?: number): void;
}
export default PowerRender;
export { Shape };
