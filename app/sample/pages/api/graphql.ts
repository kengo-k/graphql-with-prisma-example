import next, { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { readFileSync } from 'fs'
import { join } from 'path'

import { Resolvers, Todo, Category } from '../../graphql/dist/generated-server'

const path = join(process.cwd(), 'graphql', 'schema.graphql')
const typeDefs = readFileSync(path).toString('utf-8')

const getIDGenerator = () => {
  let i = 1
  return () => {
    return `${i++}`
  }
}

const nextTodoID = getIDGenerator()
const nextCategoryID = getIDGenerator()

const todo = (
  title: string,
  category: Category,
  priority: number = 5
): Todo => {
  const now = new Date().toLocaleString('ja-JP')
  return {
    id: nextTodoID(),
    title,
    category,
    priority,
    done: false,
    created_at: now,
    updated_at: now,
  }
}

const category = (name: string): Category => {
  return { id: nextCategoryID(), name }
}

const CATEGORY_WORK = category('WORK')
const CATEGORY_LIFE = category('LIFE')

const todos = [
  todo('GraphQLの仕様を理解する', CATEGORY_WORK),
  todo('社会保険料を納付する', CATEGORY_LIFE, 10),
  todo('ゴミ袋が切れているので補充する', CATEGORY_LIFE),
]

const resolvers: Resolvers = {
  Query: {
    todos: async (_, { category }) => {
      console.log('> select todos...')
      console.log(category)
      return todos.filter((todo) => {
        return todo.category.name === category
      })
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
