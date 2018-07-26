import express from 'express';
import bodyParser from 'body-parser';

class App{

    constructor() {
        this.app = express();
    }

    init() {
        this.initMiddlewares();
        return this.app;
    }

    initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended : true }));
    }
}

export default new App();