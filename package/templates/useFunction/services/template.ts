import CustomError from '../utils/CustomError';
import statusCode from '../utils/status';

const create = async (data: any, user: any) => {
  throw CustomError(statusCode.notImplemented, 'Not implemented');
}

const getAll = async (data: any, user: any) => {
  throw CustomError(statusCode.notImplemented, 'Not implemented');
}

const get = async (data: any, user: any) => {
  throw CustomError(statusCode.notImplemented, 'Not implemented');
}

const update = async (params: any, data: any, user: any) => {
  throw CustomError(statusCode.notImplemented, 'Not implemented');
}

const remove = async (params: any, user: any) => {
  throw CustomError(statusCode.notImplemented, 'Not implemented');
}

export default {
  create,
  getAll,
  get,
  update,
  remove
}