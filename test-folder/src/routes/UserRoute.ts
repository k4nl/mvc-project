import express, { Router, Request, Response, NextFunction } from 'express';
import Routes from '.';
import UserMiddleware from '../middlewares/UserMiddleware';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

class Model {
  async create(data: any) {
    return data;
  }
  async findAll() {
    return [];
  }
  async findById(id: string) {
    return {};
  }
  async findByIdAndUpdate(id: string, data: any) {
    return data;
  }
  async findByIdAndDelete(id: string) {
    return {};
  }
  async update(id: string, data: any) {
    return data;
  }

};

class UserRoute extends Routes {
  public router: Router;
  private validateMiddleware: any = UserMiddleware;

  constructor() {
    super()
    this.validateMiddleware = UserMiddleware;
    this.router = express.Router();
    this.initRoutes();
  }

  protected async initRoutes() {
    const model = new Model();
    const service = new UserService(model);
    const controller = new UserController(service);
    this.router.post(
      '/',
      this.validateMiddleware.validateCreate,
      controller.create
    );

    this.router.get(
      '/',
      this.validateMiddleware.validateGetAll,
      controller.getAll
    );

    this.router.get(
      '/:id',
      this.validateMiddleware.validateGet,
      controller.get
    );

    this.router.put(
      '/:id',
      this.validateMiddleware.validateUpdate,
      controller.update
    );

    this.router.delete(
      '/:id',
      this.validateMiddleware.validateDelete,
      controller.delete
    );
  }

}

export default new UserRoute().router;
