import express from 'express';

export interface ControllerInterface {
  path: string;
  router: express.Router;
}

export class Controller implements ControllerInterface {
  public path: string;
  public router: express.Router = express.Router();

  constructor(pathValue: string) {
    this.path = pathValue;
  }
}
