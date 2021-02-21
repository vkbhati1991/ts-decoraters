
import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetaDataKeys } from "./interface";

export function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc:any) {
        const middlewares = Reflect.getMetadata(MetaDataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetaDataKeys.middleware, [...middlewares, middleware], target, key);
    }
}