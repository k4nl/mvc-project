import express, { Router } from 'express';

export default class Routes {
  public router: Router;

  constructor() {
    this.router = express.Router();
  }

}
