import express, { Router } from 'express';
import Routes from '.';
import TemplateMiddleware from '../middlewares/template';
import TemplateController from '../controllers/template';
import TemplateService from '../services/template';

// import your model here, this is just example
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

class Template extends Routes {
  public router: Router;
  private validateMiddleware: any = TemplateMiddleware;

  constructor() {
    super()
    this.validateMiddleware = TemplateMiddleware;
    this.router = express.Router();
    this.initRoutes();
  }

  protected initRoutes(): void {
    const model = new Model();
    const service = new TemplateService(model);
    const controller = new TemplateController(service);
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

export default new Template().router;
