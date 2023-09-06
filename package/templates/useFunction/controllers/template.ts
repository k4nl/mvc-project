import { Request, Response, NextFunction } from 'express';
import Service from '../services/template';
import statusCode from '../utils/status';

export interface ICustomRequest extends Request {
  user?: any;
}

const create = async (req: ICustomRequest, res: Response, next: NextFunction) => {
  try {
    const { body: data, user } = req;
    const response = await Service.create(data, user);
    return res.status(statusCode.created).json(response);
  } catch (error: Error | any) {
    next()
  }
}

const getAll = async (req: ICustomRequest, res: Response, next: NextFunction) => {
  try {
    const { query, body: data, user } = req;
    const response = await Service.getAll(query, user);
    return res.status(statusCode.success).json(response);
  } catch (error: Error | any) {
    next()
  }
}

const get = async (req: ICustomRequest, res: Response, next: NextFunction) => {
  try {
    const { params, user } = req;
    const response = await Service.get(params, user);
    return res.status(statusCode.success).json(response);
  } catch (error: Error | any) {
    next()
  }
}

const update = async (req: ICustomRequest, res: Response, next: NextFunction) => {
  try {
    const { params, body: data, user } = req;
    const response = await Service.update(params, data, user);
    return res.status(statusCode.success).json(response);
  } catch (error: Error | any) {
    next()
  }
}

const remove = async (req: ICustomRequest, res: Response, next: NextFunction) => {
  try {
    const { params, user } = req;
    const response = await Service.remove(params, user);
    return res.status(statusCode.success).json(response);
  } catch (error: Error | any) {
    next()
  }
}

export default {
  create,
  getAll,
  get,
  update,
  remove
}