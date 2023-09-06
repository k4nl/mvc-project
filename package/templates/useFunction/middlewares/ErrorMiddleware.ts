import { Request, Response } from 'express';
import statusCode from '../utils/status';

export default function(error: Error | any, _req: Request, res: Response) {
  if (error.status) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      stack: error.stack || null,
    });
  }
  return res.status(statusCode.internalServerError).json({
    status: statusCode.internalServerError,
    message: error.message,
    stack: error.stack || null,
  });
}