import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import './controllers/LoginController';
import { AppRouter } from "./AppRouter";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(AppRouter.instance);

app.listen(3001, () => {
    console.log("server is running")
});