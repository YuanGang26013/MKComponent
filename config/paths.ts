import * as fs from 'fs';
import * as path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export const appHtml = resolveApp('example/index.html');
export const appIndexFile = ['react-hot-loader/patch', resolveApp('./example')];
export const outputDir = resolveApp('example/');