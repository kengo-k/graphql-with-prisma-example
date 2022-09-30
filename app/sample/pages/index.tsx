import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from '@apollo/client'
import { GetTodoListDocument } from '../graphql/dist/generated-client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

function Users() {
  const { loading, error, data } = useQuery(GetTodoListDocument, {
    variables: {
      category: 'LIFE',
    },
  })

  if (loading) return <p>Loading...</p>
  if (error || !data) return <p>Error</p>

  return (
    <ul>
      {data.todos.map((user, index: number) => {
        console.log(Object.getOwnPropertyNames(user)) // ['__typename', 'name']
        return <li key={index}>{user.title}</li>
      })}
    </ul>
  )
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  )
}
