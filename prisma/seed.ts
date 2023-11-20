import { PrismaClient } from "@prisma/client";
// import { links } from '../data/links'
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      password: `$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy`, //password
      role: "ADMIN",
    },
  });
  console.log({ user });
  //   await prisma.job.createMany({
  //     data: links,
  //   })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
