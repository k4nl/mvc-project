import Controller from './index';
import Service from '../services/UserService';

export default class UserController extends Controller {
  public service: Service;
  constructor(service: Service) {
    console.log('Service aqui no userController', Service)
    super(service);
    this.service = service;
  }
}