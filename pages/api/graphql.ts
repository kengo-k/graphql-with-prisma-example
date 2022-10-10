import "reflect-metadata";

import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { createContext } from '../../lib/context'

import { resolvers } from "../../generated/typegraphql-prisma";
import { buildSchemaSync } from 'type-graphql'

const schema = buildSchemaSync({resolvers, validate: false})

const cors = Cors()

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
})
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
