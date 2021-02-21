"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
var interface_1 = require("./interface");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(interface_1.MetaDataKeys.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
