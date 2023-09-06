import path from "path";

export default class Path {
  public static getUserPath = () => {
    return process.cwd();
  }

  public static destination = (destination: string) => {
    return path.resolve(Path.getUserPath(), destination);
  }

  public static resolvePath = (paths: string[]) => {
    return path.resolve(...paths);
  }

  public static getTemplatePath = (template: string) => {
    return path.resolve(__dirname, '../../templates', template, 'template.ts');
  }
}