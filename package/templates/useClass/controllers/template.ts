import Controller from '.';
import Service from '../services/template';

export default class Template extends Controller {
  protected service: Service;
  constructor(service: Service) {
    super(
      service
    );
  }
}