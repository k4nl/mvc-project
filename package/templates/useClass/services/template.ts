import Service from '.'
import CustomError from '../utils/CustomError';
import statusCode from '../utils/status';

export default class Template extends Service {

  async create(data: any, user?: any) {
    const response = await this.model.create(data);
    if (!response) throw new CustomError(statusCode.badRequest, 'Could not create');
    return response
  }

  async getAll(query?: any, user?: any) {
    const response = await this.model.findAll();
    if (!response) throw new CustomError(statusCode.notFound, 'Could not findAll');
    return response;
  }

  async get(params: any, user?: any) {
    const response = await this.model.findById(params);
    if (!response) throw new CustomError(statusCode.notFound, 'Could not findById');
    return response;
  }

  async update(params: any, data: any, user?: any) {
    const response = await this.model.update(params, data);
    if (!response) throw new CustomError(statusCode.notFound, 'Could not update');
    return response;
  }

  async delete(params: any, user?: any) {
    const response = await this.model.findByIdAndDelete(params);
    if (!response) throw new CustomError(statusCode.notFound, 'Could not delete');
    return response;
  }
}