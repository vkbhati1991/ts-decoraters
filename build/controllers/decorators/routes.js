"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
var interface_1 = require("./interface");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            console.log(desc);
            Reflect.defineMetadata(interface_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(interface_1.MetaDataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(interface_1.Methods.get);
exports.post = routeBinder(interface_1.Methods.post);
exports.del = routeBinder(interface_1.Methods.delete);
exports.put = routeBinder(interface_1.Methods.put);
exports.patch = routeBinder(interface_1.Methods.patch);
