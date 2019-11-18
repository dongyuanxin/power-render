import * as Shape from "./shape/index";
import { findMoreOrEqualThan } from "./util";
class PowerRender {
    constructor(container) {
        this.layers = {};
        if (typeof container === "string") {
            this.container = document.querySelector(container);
        }
        else {
            this.container = container;
        }
        this.ctx = this.container.getContext("2d");
        this.layers[0] = this.getLayer(0);
    }
    getLayer(zindex) {
        if (!this.layers[zindex]) {
            const offScreenCanvas = document.createElement("canvas");
            offScreenCanvas.width = this.container.width;
            offScreenCanvas.height = this.container.height;
            this.layers[zindex] = {
                canvas: offScreenCanvas,
                ctx: offScreenCanvas.getContext("2d"),
                contents: []
            };
        }
        return this.layers[zindex];
    }
    add(shape, zindex = 0, method = "fill") {
        const layer = this.getLayer(zindex);
        layer.contents.push({
            shape,
            method
        });
    }
    draw(zindex = 0) {
        const rrZindexes = findMoreOrEqualThan(Reflect.ownKeys(this.layers), zindex);
        rrZindexes.forEach(rrZindex => {
            const { canvas, contents, ctx } = this.layers[rrZindex];
            contents.forEach(({ shape, method }) => {
                if (method === "fill") {
                    shape.fill(ctx);
                }
                else {
                    shape.stroke(ctx);
                }
            });
            this.ctx.drawImage(canvas, 0, 0);
        });
    }
}
export default PowerRender;
export { Shape };
