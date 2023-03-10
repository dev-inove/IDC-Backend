import 'module-alias/register';
import '@config/moduleAliasConfig';

import dotenv from 'dotenv';
dotenv.config();

import '@shared/database'

import express from 'express';
import cors from 'cors';
import routes from '@shared/index.routes';
import bodyParser from 'body-parser';

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();
    this.middlewares();

    this.routes();
  }

  routes(){
    this.server.use(routes);
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: false }))
    this.server.use(bodyParser.json());
  }
}
/*
  const app = express();
  app.get('/users', (request, response) => {
  return response.send('Hello World!');
  });

  app.listen(3333, () => {
  console.log('HTTP Server tá rodanu caraio!');
  });
*/

export default new App().server;