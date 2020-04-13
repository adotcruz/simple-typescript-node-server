import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import { Controller } from './controllers';

export class App {
  private app: express.Application;
  private port: number;
  private isDev: boolean;

  constructor(controllers: Controller[], portNumber: number, isDevelopment: boolean) {
    this.app = express();
    this.port = portNumber;
    this.isDev = isDevelopment;

    this.app.get('/', (_req, res) => {
      res.send('the app is working with hot module set up');
    })

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    // initialize middlewares here
    this.app.use(bodyParser.json());
    if (this.isDev) {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(morgan('tiny'));
    }
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router)
    })
  }

  public listen() {
    this.app.listen(this.port, err => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${this.port}`)
    })
  }
}