import * as Shape from "./shape/index";

interface ShapeWithZindexScheme {
  shape: Shape.AbstractShape;
  zindex: number;
}

interface LayerSet {
  [zindex: number]: CanvasRenderingContext2D;
}

class PowerRender {
  private container: HTMLCanvasElement;
  private layers: LayerSet;
  private shapes: ShapeWithZindexScheme[];

  constructor(container: string | HTMLCanvasElement) {
    this.shapes = [];
    if (typeof container === "string") {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }
  }

  private getLayer(zindex: number): CanvasRenderingContext2D {
    if (!this.layers[zindex]) {
      this.layers[zindex] = this.container.getContext("2d");
    }

    return this.layers[zindex];
  }

  public add(shape: Shape.AbstractShape, zindex: number = 0) {
    this.shapes.push({
      zindex,
      shape
    });
  }

  public stroke() {
    const { shape, zindex } = this.shapes.pop();
    shape.stroke(this.getLayer(zindex));
  }

  public strokeAll() {
    this.shapes.forEach(({ shape, zindex }) =>
      shape.stroke(this.getLayer(zindex))
    );
    this.shapes = [];
  }

  public fill() {
    const { shape, zindex } = this.shapes.pop();
    shape.fill(this.getLayer(zindex));
  }

  public fillAll() {
    this.shapes.forEach(({ shape, zindex }) =>
      shape.fill(this.getLayer(zindex))
    );
    this.shapes = [];
  }
}

export default PowerRender;

export { Shape };
