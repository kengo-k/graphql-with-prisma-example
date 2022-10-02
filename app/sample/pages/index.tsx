import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      category
      done
    }
  }
`

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

function Users() {
  const { loading, error, data } = useQuery(AllTasksQuery)

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
