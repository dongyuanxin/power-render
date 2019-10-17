import * as Shape from "./shape/index";
declare class PowerRender {
    private container;
    private ctx;
    private shapes;
    constructor(container: string | HTMLCanvasElement);
    add(shape: Shape.AbstractShape): void;
    stroke(): void;
    strokeAll(): void;
    fill(): void;
    fillAll(): void;
}
export default PowerRender;
export { Shape };
