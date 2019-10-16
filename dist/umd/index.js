(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VRender = /** @class */ (function () {
        function VRender() {
            console.log('hello world');
        }
        return VRender;
    }());
    new VRender();
    exports.default = VRender;
    window['VRender'] = VRender;
});
