
import 'reflect-metadata';
import { Methods, MetaDataKeys } from "./interface";

interface Aa extends PropertyDecorator {
    value?: Function
}

function routeBinder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: Aa) {
            console.log(desc);
            Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.delete);
export const put = routeBinder(Methods.put);
export const patch = routeBinder(Methods.patch);


