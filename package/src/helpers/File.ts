import Path from '../path';
import fs from 'fs';

export default class File {
  public controllerName: string;
  public serviceName: string;
  private name: string;
  public controllerTemplate: string;
  public serviceTemplate: string;
  public middlewareName: string;
  public middlewareTemplate: string;
  public routeTemplate: string;
  public routeName: string;
  constructor(name: string) {
    this.name = name;
    this.controllerName = this.constructName('controller');
    this.serviceName = this.constructName('service');
    this.middlewareName = this.constructName('middleware');
    this.routeName = this.constructName('route');
    this.controllerTemplate = this.constructController();
    this.serviceTemplate = this.constructService();
    this.middlewareTemplate = this.constructMiddleware();
    this.routeTemplate = this.constructRoute();
  }

  private capitalize = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  private constructName = (file: string) => {
    return `${this.capitalize(this.name)}${this.capitalize(file)}`;
  }

  private constructController = () => {
    const templatePath = Path.getTemplatePath('useClass/controllers');
    const template = fs.readFileSync(templatePath, 'utf-8');
    return template
      .replace(/Template/g, this.controllerName)
      .replace(/template/g, this.serviceName)
  }

  private constructService = () => {
    const templatePath = Path.getTemplatePath('useClass/services');
    const template = fs.readFileSync(templatePath, 'utf-8');
    return template
      .replace(/Template/g, this.serviceName)
  }

  private constructMiddleware = () => {
    const templatePath = Path.getTemplatePath('useClass/middlewares');
    const template = fs.readFileSync(templatePath, 'utf-8');
    return template
      .replace(/Template/g, this.middlewareName)
  }

  private constructRoute = () => {
    const templatePath = Path.getTemplatePath('useClass/routes');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const middlewareImport = /\.\.\/middlewares\/template/g
    const controllerImport = /\.\.\/controllers\/template/g
    return template
      .replace(/Template/g, this.routeName)
      .replace(/TemplateMiddleware/g, this.middlewareName)
      .replace(/TemplateController/g, this.controllerName)
      .replace(middlewareImport, `../middlewares/${this.middlewareName}`)
      .replace(controllerImport, `../controllers/${this.controllerName}`)
  }

}