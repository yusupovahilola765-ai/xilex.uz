import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("Fayllar havolasini yangilash boshlandi...");
  
  // Update all resources where url is empty or null
  const result = await prisma.resource.updateMany({
    where: {
      OR: [
        { url: "" },
        { url: null }
      ]
    },
    data: {
      url: "/books/kitob.pdf"
    }
  });
  
  console.log(`${result.count} ta resursga muvaffaqiyatli fayl ulandi!`);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
