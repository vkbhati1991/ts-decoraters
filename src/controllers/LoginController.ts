import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('middle call');
    next();
}

@controller('/auth')
export class LoginController {
    
    @get('/loginss')
    add(a: number): number {
        return a + 3;
    }

    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(
            `
            <form method="POST">
                <input type="text" name="email" />
                <button>Submit</button>
            </form>
            `
        );
    }

    @post('/login')
    @bodyValidator('email')
    postLogin(req: Request, res: Response): void {
        const { email } = req.body;

        if (email && email === 'vinod@gmail.com') {
            res.redirect('/auth/login');
        } else {
            res.send('Invalid UserName ')
        }
    }

}

