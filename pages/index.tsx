import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from '@apollo/client'

import {GetAllTasksDocument} from "../generated/graphql-codegen/client"

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

function Users() {
  const { loading, error, data } = useQuery(GetAllTasksDocument)

  if (loading) return <p>Loading...</p>
  if (error || !data) return <p>Error</p>

  return (
    <ul>
      {data.tasks.map((task, index: number) => {
        return <li key={index}>{task.title}</li>
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
