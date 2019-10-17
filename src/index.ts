import * as Shape from "./shape/index";

class PowerRender {
  private container: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private shapes: Shape.AbstractShape[];

  constructor(container: string | HTMLCanvasElement) {
    this.shapes = [];
    if (typeof container === "string") {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }

    this.ctx = this.container.getContext("2d");
  }

  add(shape: Shape.AbstractShape) {
    this.shapes.push(shape);
  }

  stroke() {
    const shape = this.shapes.pop();
    shape.stroke(this.ctx);
  }

  strokeAll() {
    this.shapes.forEach(shape => shape.stroke(this.ctx));
    this.shapes = [];
  }

  fill() {
    const shape = this.shapes.pop();
    shape.fill(this.ctx);
  }

  fillAll() {
    this.shapes.forEach(shape => shape.fill(this.ctx));
    this.shapes = [];
  }
}

export default PowerRender;

export { Shape };
