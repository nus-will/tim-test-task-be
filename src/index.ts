import api from './api';
import { Application } from 'express';
import { env } from './config/enviroment';

async function startApiServer() {
  const app: Application = await api.server();
  app.listen(env.SERVER_PORT, () => {
    console.log(`Listening on port ${env.SERVER_PORT} in ${env.NODE_ENV} mode`);
  });
}

startApiServer();

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});
