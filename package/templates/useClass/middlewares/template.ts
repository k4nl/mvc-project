import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';
import statusCode from '../utils/status';
import Validate from './Validate';
import { ICustomRequest } from '../interfaces/Request';

export default class Template extends Validate {
  private requiredFields: string[];

  constructor() {
    super()
    this.requiredFields = ['']
  }

  private validateRequiredFields() {
    for (const field of this.requiredFields) {
      Template.requiredField(field)
    }
  }

  public static validateCreate(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      // implement;
      next()
    } catch (error) {
      next(error)
    }
    
  }

  public static validateUpdate(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      // implement;
      next()
    } catch (error) {
      next(error)
    }
  }

  public static validateDelete(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      // implement;
      next()
    } catch (error) {
      next(error)
    }
  }

  public static validateGet(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      // implement;
      next()
    } catch (error) {
      next(error)
    }
  }

  public static validateGetAll(req: ICustomRequest, res: Response, next: NextFunction) {
    try {
      // implement;
      next()
    } catch (error) {
      next(error)
    }
  }

}