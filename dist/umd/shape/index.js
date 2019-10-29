(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./triangle", "./rectangle", "./circle", "./sector", "./bow", "./polygon"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var triangle_1 = require("./triangle");
    exports.Triangle = triangle_1.default;
    var rectangle_1 = require("./rectangle");
    exports.Rectangle = rectangle_1.default;
    var circle_1 = require("./circle");
    exports.Circle = circle_1.default;
    var sector_1 = require("./sector");
    exports.Sector = sector_1.default;
    var bow_1 = require("./bow");
    exports.Bow = bow_1.default;
    var polygon_1 = require("./polygon");
    exports.Polygon = polygon_1.default;
});
