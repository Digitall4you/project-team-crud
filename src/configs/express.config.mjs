import express from 'express';
import bodyParser from 'body-parser';

import routes from '../routes';

class App{

    constructor() {
        this.app = express();
    }

    init() {
        this.initMiddlewares();
        this.initRoutes();
        return this.app;
    }

    initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended : true }));
    }

    initRoutes() { 
        this.app.use(routes);
    }
}

export default new App();