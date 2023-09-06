import { Request, Response, NextFunction } from 'express';
import statusCode from '../utils/status';
import { ICustomRequest } from '../interfaces/Request';

export default class Controller {
  public service: any;

  public async create(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { body: data, user } = req;
      const response = await this.service.create(data, user);
      return res.status(statusCode.created).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  public async getAll(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      console.log(this, 'ESTE EH O SERIVCESAEDAWER')
      const { query, body: data, user } = req;
      const response = await this.service.getAll(query, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  public async get(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { params, user } = req;
      const response = await this.service.get(params, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  public async update(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { params, body: data, user } = req;
      const response = await this.service.update(params, data, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  public async delete(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { params, user } = req;
      const response = await this.service.delete(params, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

}
