import path from 'path'

export interface IDefaultFolderStructure {
  src: string[]
  controller?: string[]
  service?: string[]
  routes?: string[]
  utils?: string[]
  middlewares?: string[]
  models?: string[]
  interfaces?: string[]
}

export interface IConfig {
  useEntity?: boolean,
  useAuth?: boolean,
}

export const defaultConfig: IConfig = {
  useEntity: false,
  useAuth: false,
}

export interface IDefaultTemplates {
  path: string,
  destination: string[],
  fileName: string,
}


export const defaultFolderStructure: IDefaultFolderStructure = {
  src: ['src'],
  controller: ['src', 'controllers'],
  service: ['src', 'services'],
  routes: ['src', 'routes'],
  utils: ['src', 'utils'],
  middlewares: ['src', 'middlewares'],
  models: ['src', 'models'],
  interfaces: ['src', 'interfaces'],
}

export const useEntityFolderStructure: IDefaultFolderStructure = {
  src: ['src'],
}

export const defaultTemplates: IDefaultTemplates[] = [
  {
    destination: ['src', 'controllers'],
    path: path.join(__dirname, '../../templates/useClass/controllers/index.ts'),
    fileName: 'index.ts'
  },
  {
    destination: ['src', 'services'],
    path: path.join(__dirname, '../../templates/useClass/services/index.ts'),
    fileName: 'index.ts'
  },
  {
    destination: ['src', 'routes'],
    path: path.join(__dirname, '../../templates/useClass/routes/index.ts'),
    fileName: 'index.ts'
  },
  {
    destination: ['src', 'middlewares'],
    path: path.join(__dirname, '../../templates/useClass/middlewares/ErrorMiddleware.ts'),
    fileName: 'ErrorMiddleware.ts'
  },
  {
    destination: ['src', 'middlewares'],
    path: path.join(__dirname, '../../templates/useClass/middlewares/Validate.ts'),
    fileName: 'Validate.ts'
  },
  {
    destination: ['src', 'interfaces'],
    path: path.join(__dirname, '../../templates/useClass/interfaces/Request.ts'),
    fileName: 'Request.ts'
  },
  {
    destination: ['src', 'utils'],
    path: path.join(__dirname, '../../templates/useClass/utils/CustomError.ts'),
    fileName: 'CustomError.ts'
  },
  {
    destination: ['src', 'utils'],
    path: path.join(__dirname, '../../templates/useClass/utils/status.ts'),
    fileName: 'status.ts'
  },
]

