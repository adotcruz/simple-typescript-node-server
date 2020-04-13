import express from 'express';

import { Controller } from './Controller';

export class TestController extends Controller {
  constructor() {
    super('/test');
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getTest);
    this.router.get(`${this.path}/data`, this.postTest);
  }

  private getTest = (_: express.Request, res: express.Response) => {
    res.send('here in test controller i think it works!');
  };

  private postTest = (_: express.Request, res: express.Response) => {
    res.send({
      data: 'fake',
    });
  };
}
