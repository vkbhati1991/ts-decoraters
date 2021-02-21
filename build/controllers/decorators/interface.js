"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataKeys = exports.Methods = void 0;
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
    Methods["patch"] = "patch";
    Methods["delete"] = "delete";
    Methods["put"] = "put";
})(Methods = exports.Methods || (exports.Methods = {}));
var MetaDataKeys;
(function (MetaDataKeys) {
    MetaDataKeys["path"] = "path";
    MetaDataKeys["method"] = "method";
    MetaDataKeys["middleware"] = "middleware";
    MetaDataKeys["validator"] = "validator";
})(MetaDataKeys = exports.MetaDataKeys || (exports.MetaDataKeys = {}));
