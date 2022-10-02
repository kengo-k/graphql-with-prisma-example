import { prisma } from '../lib/prisma'

const main = async () => {
  await prisma.task.create({
    data: { title: 'GraphQL学習', category: 'Work', priority: 7 },
  })
  await prisma.task.create({
    data: { title: '社会保険料支払い', category: 'Life', priority: 10 },
  })
  await prisma.task.create({
    data: { title: '燃えないゴミを出す', category: 'Life', priority: 9 },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
