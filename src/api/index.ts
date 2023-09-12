import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from '../graphql/resolvers'
import { typeDefs } from '../graphql/types'

interface ApiInterface {
  server(): Promise<Application>;
}

class Api implements ApiInterface {
  async server(): Promise<Application> {

    const schema = makeExecutableSchema({
      resolvers,
      typeDefs,
    })

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    )

    app.get('/', (_req: Request, res: Response) => {
      res.send('Welcome to NUS express application!');
    });
    app.use(cors());
    return app;
  }
}

export default new Api();
