import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    contractors: (_: any, args: any) => {
      const { _sort, _order, q } = args

      return prisma.contractor.findMany({
        where: {
          OR: [
            {
              specialities: {
                some: {
                  name: {
                    contains: q,
                    mode: 'insensitive',
                  },
                },
              },
            },
            {
              full_name: {
                contains: q,
                mode: 'insensitive',
              },
            },
          ],
        },
        orderBy: {
          [_sort]: _order,
        },
        include: {
          specialities: true,
        },
      })
    },
  },
}
