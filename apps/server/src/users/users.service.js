import prisma from '../helpers/prisma-client';

export async function getOneUser(id) {
  const user = await prisma.user.findFirst({ where: { id } });
  return user;
}
