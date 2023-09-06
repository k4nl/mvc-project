import { Request, Response } from 'express';
import CustomError from '../utils/CustomError';
import statusCode from '../utils/status';

export default class ErrorMiddleware {
  static async handle(error: Error | any, _req: Request, res: Response) {
    if (error instanceof CustomError) {
      return res.status(error.status).json({
        status: error.status,
        message: error.message,
        stack: error.stack || null,
      });
    }

    return res.status(statusCode.internalServerError).json({
      status: statusCode.internalServerError,
      message: error.message,
      stack: error.stack,
    });
  }
}