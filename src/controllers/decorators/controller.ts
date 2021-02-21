import { NextFunction, RequestHandler, Request, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods, MetaDataKeys } from "./interface";

const router = AppRouter.instance;

function bodyValidator(keys: string): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {

        console.log(req.body);
        
        if (!req.body) {
            res.status(402).send('Invalid Request top');

            return;
        }

        for (let key of keys) {
            if (!req.body[key]) {
                res.status(402).send('Invalid Request' + key);
            }
        }

        next();
    }
}

export function controller(routePrefix: string) {
    return function (target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];

            const path = Reflect.getMetadata(MetaDataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetaDataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) || [];

            const validator = bodyValidator(requiredBodyProps);

            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    }
}