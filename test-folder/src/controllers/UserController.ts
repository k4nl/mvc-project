import Controller from '.';
import Service from '../services/UserService';

export default class UserController extends Controller {
  public service: Service;
  constructor(service: Service) {
    console.log(service.create, 'service no UserController')
    super(
      service,
    );
    this.service = service
  }
}