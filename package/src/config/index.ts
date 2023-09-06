import path from 'path';
import fs from 'fs';
import {
  defaultConfig
} from './config';

const configPath = path.join(__dirname, 'mvc.config.json')

const readyConfig = () => {
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
  }
  return JSON.parse(JSON.stringify(defaultConfig))
}

export const config = readyConfig()
