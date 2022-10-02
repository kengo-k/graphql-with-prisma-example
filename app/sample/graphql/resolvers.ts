export const resolvers = {
  Query: {
    tasks: () => {
      return [
        { id: 1, title: 'test_title', category: 'test_category', done: false },
      ]
    },
  },
}
