import * as Shape from "./shape/index";
var PowerRender = /** @class */ (function () {
    function PowerRender(container) {
        this.shapes = [];
        if (typeof container === "string") {
            this.container = document.querySelector(container);
        }
        else {
            this.container = container;
        }
        this.ctx = this.container.getContext("2d");
    }
    PowerRender.prototype.add = function (shape) {
        this.shapes.push(shape);
    };
    PowerRender.prototype.stroke = function () {
        var shape = this.shapes.pop();
        shape.stroke(this.ctx);
    };
    PowerRender.prototype.strokeAll = function () {
        var _this = this;
        this.shapes.forEach(function (shape) { return shape.stroke(_this.ctx); });
        this.shapes = [];
    };
    PowerRender.prototype.fill = function () {
        var shape = this.shapes.pop();
        shape.fill(this.ctx);
    };
    PowerRender.prototype.fillAll = function () {
        var _this = this;
        this.shapes.forEach(function (shape) { return shape.fill(_this.ctx); });
        this.shapes = [];
    };
    return PowerRender;
}());
export default PowerRender;
export { Shape };
