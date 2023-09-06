import CustomError from '../utils/CustomError';
import statusCode from '../utils/status';

// example of model class;

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

export default class Service {
  protected model: Model; // Use o tipo correto para sua classe de modelo

  constructor(model: Model) {
    this.model = model;
  }

  async create(data: any, user?: any) {
    const response = await this.model.create(data);
    if (!response) throw new CustomError(statusCode.badRequest, 'Could not create');
    return response;
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
