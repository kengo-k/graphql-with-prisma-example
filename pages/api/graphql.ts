import 'reflect-metadata'

import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { join } from 'path'
import { buildSchemaSync } from 'type-graphql'

import { resolvers } from '@generated/typegraphql-prisma'

import { createContext } from '~/lib/context'

const schema = buildSchemaSync({
  resolvers,
  validate: false,
  emitSchemaFile: join(process.cwd(), 'graphql', 'schema.graphql'),
})

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
