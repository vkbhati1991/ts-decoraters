import 'reflect-metadata';

import { MetaDataKeys } from "./interface";

export function bodyValidator(...keys: string[]) {
    return function (target: any, key: string, desc: any) {
        Reflect.defineMetadata(MetaDataKeys.validator, keys, target, key);
    }
}

