import * as Shape from "./shape/index";
import { findMoreOrEqualThan } from "./util";

type DrawMethod = "stroke" | "fill";

interface DrawContent {
  shape: Shape.AbstractShape;
  method: DrawMethod;
}

interface LayerScheme {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  contents: DrawContent[];
}

interface LayerSet {
  [zindex: number]: LayerScheme;
}

class PowerRender {
  private container: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private layers: LayerSet;

  constructor(container: string | HTMLCanvasElement) {
    this.layers = {};

    if (typeof container === "string") {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    this.ctx = this.container.getContext("2d");
    this.layers[0] = this.getLayer(0);
  }

  private getLayer(zindex: number): LayerScheme {
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

  public add(
    shape: Shape.AbstractShape,
    method: DrawMethod,
    zindex: number = 0
  ) {
    const layer = this.getLayer(zindex);
    layer.contents.push({
      shape,
      method
    });
  }

  public draw(zindex: number = 0) {
    const rrZindexes = findMoreOrEqualThan(
      Reflect.ownKeys(this.layers) as number[],
      zindex
    );

    rrZindexes.forEach(rrZindex => {
      const { canvas, contents, ctx } = this.layers[rrZindex];
      contents.forEach(({ shape, method }) => {
        if (method === "fill") {
          shape.fill(ctx);
        } else {
          shape.stroke(ctx);
        }
      });
      this.ctx.drawImage(canvas, 0, 0);
    });
  }

  public drawAll(except?: number) {
    const rrZindexes = (Reflect.ownKeys(this.layers) as number[]).sort(
      (a, b) => a - b
    );

    rrZindexes.forEach(rrZindex => {
      if (except !== undefined && rrZindex + "" === except + "") {
        return;
      }

      const { canvas, contents, ctx } = this.layers[rrZindex];
      contents.forEach(({ shape, method }) => {
        if (method === "fill") {
          shape.fill(ctx);
        } else {
          shape.stroke(ctx);
        }
      });
      this.ctx.drawImage(canvas, 0, 0);
    });
  }

  public clear(zindex: number = 0) {
    const layer = this.layers[zindex];
    layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
    this.ctx.clearRect(0, 0, this.container.width, this.container.height);
    this.drawAll(zindex);
  }

  public clearAll() {
    (Reflect.ownKeys(this.layers) as number[]).forEach(zindex => {
      const { ctx, canvas } = this.layers[zindex];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    this.ctx.clearRect(0, 0, this.container.width, this.container.height);
  }
}

export default PowerRender;

export { Shape };
