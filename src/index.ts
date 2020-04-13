import minimist from 'minimist';

import { App } from './app';
import { TestController } from './controllers';

const processArguments: any = minimist(process.argv);

// tslint:disable-next-line: no-string-literal
const isDev = processArguments["dev"];

const app = new App(
  [
    new TestController(),
  ],
  3030,
  isDev
);

app.listen();