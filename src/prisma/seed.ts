import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.contractor.create({
    data: {
      full_name: 'Strykes',
      day_rate: 300,
      available: true,
      specialities: {
        create: [{ name: 'Surgery' }, { name: 'Medical' }],
      },
    },
  })

  await prisma.contractor.create({
    data: {
      full_name: 'Rossonerri',
      day_rate: 250,
      available: false,
      specialities: {
        create: [{ name: 'Healthcare' }, { name: 'Fitness' }],
      },
    },
  })

  await prisma.contractor.create({
    data: {
      full_name: 'Tyga',
      day_rate: 199,
      available: false,
      specialities: {
        create: [{ name: 'Surgery' }, { name: 'Medical' }],
      },
    },
  })

  await prisma.contractor.create({
    data: {
      full_name: 'Yolo.corp',
      day_rate: 200,
      available: true,
      specialities: {
        create: [{ name: 'Automotive' }, { name: 'Modification' }],
      },
    },
  })

  await prisma.contractor.create({
    data: {
      full_name: 'Bardi',
      day_rate: 100,
      available: true,
      specialities: {
        create: [
          { name: 'Technology' },
          { name: 'Home Living' },
          { name: 'Automotive' },
          { name: 'IoT' },
          { name: 'Playground' },
          { name: 'Electric' },
        ],
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
