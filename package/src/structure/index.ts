import { config } from '../config';
import { IConfig, IDefaultFolderStructure, defaultFolderStructure, IDefaultTemplates, defaultTemplates } from '../config/config';
import File from '../helpers/File';
import fs from 'fs';
import Path from '../path';

export default class Structure {
  private config: IConfig;
  private defaultFolderStructure: IDefaultFolderStructure;
  private defaultTemplates: IDefaultTemplates[];

  constructor() {
    this.config = config;
    this.defaultFolderStructure = defaultFolderStructure;
    this.defaultTemplates = defaultTemplates;
  }

  private constructDefaultFolders = () => {
    for (const path of Object.values(this.defaultFolderStructure)) {
      const folderPath = Path.resolvePath(path);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    }
  }

  private constructDefaultTemplates = () => {
    for (const template of this.defaultTemplates) {
      const filePath = Path.resolvePath([...template.destination, template.fileName ])
      if (!fs.existsSync(filePath)) {
        fs.copyFileSync(template.path, filePath);
      }
    }
  }

  private constructGenerateTemplates = (name: string) => {
    const file = new File(name);
    try {
      if (!fs.existsSync(Path.resolvePath(['src', 'controllers', `${file.controllerName}.ts`]))) {
        fs.writeFileSync(Path.resolvePath(['src', 'controllers', `${file.controllerName}.ts`]), file.controllerTemplate);
      }
      if (!fs.existsSync(Path.resolvePath(['src', 'services', `${file.serviceName}.ts`]))) {
        fs.writeFileSync(Path.resolvePath(['src', 'services', `${file.serviceName}.ts`]), file.serviceTemplate);
      }
      if (!fs.existsSync(Path.resolvePath(['src', 'middlewares', `${file.middlewareName}.ts`]))) {
        fs.writeFileSync(Path.resolvePath(['src', 'middlewares', `${file.middlewareName}.ts`]), file.middlewareTemplate);
      }
      if (!fs.existsSync(Path.resolvePath(['src', 'routes', `${file.routeName}.ts`]))) {
        fs.writeFileSync(Path.resolvePath(['src', 'routes', `${file.routeName}.ts`]), file.routeTemplate);
      }
    } catch (error) {
      console.log('erro acola',error)
    }
  }

  public construct = () => {
    this.constructDefaultFolders();
    this.constructDefaultTemplates();
  }

  public generateTemplate = (name: string) => {
    this.constructGenerateTemplates(name);
  }
}