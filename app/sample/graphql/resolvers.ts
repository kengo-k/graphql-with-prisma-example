export const resolvers = {
  Query: {
    tasks: (_, args, ctx) => {
      return ctx.prisma.task.findMany()
    },
  },
}
