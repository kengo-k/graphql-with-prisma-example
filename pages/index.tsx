import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { useGetAllTasksQuery } from '~/generated/graphql-codegen/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

function Users() {
  const { loading, error, data } = useGetAllTasksQuery()

  if (loading) return <p>Loading...</p>
  if (error || !data) return <p>Error</p>

  return (
    <ul>
      {data.tasks.map((t, index: number) => {
        return <li key={index}>{t.title}</li>
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
