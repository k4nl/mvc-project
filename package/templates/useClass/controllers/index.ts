import { Request, Response, NextFunction } from 'express';
import Service from '../services';
import statusCode from '../utils/status';
import { ICustomRequest } from '../interfaces/Request';

export default class Controller {
  protected service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  async create(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { body: data, user } = req;
      const response = await this.service.create(data, user);
      return res.status(statusCode.created).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  async getAll(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { query, body: data, user } = req;
      const response = await this.service.getAll(query, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  async get(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { params, user } = req;
      const response = await this.service.get(params, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  async update(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { params, body: data, user } = req;
      const response = await this.service.update(params, data, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }

  async delete(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      const { params, user } = req;
      const response = await this.service.delete(params, user);
      return res.status(statusCode.success).json(response);
    } catch (error: Error | any) {
      next(error)
    }
  }
}
