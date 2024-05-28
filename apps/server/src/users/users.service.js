import { HttpException } from '../constants/http-exception';
import prisma from '../helpers/prisma-client';

export async function getOneUser(id) {
  const user = await prisma.user.findFirst({ where: { id } });
  return user;
}

export async function updateUser(id, data) {
  const userExist = await prisma.user.findFirst({ where: { id } });
  if (!userExist) {
    throw new HttpException('user not found', 404);
  }
  const user = await prisma.user.update({
    where: { id },
    data: data,
  });

  return user;
}

export async function deleteUser(id) {
  const userExist = await prisma.user.findFirst({ where: { id } });
  if (!userExist) {
    throw new HttpException('user not found', 404);
  }
  const user = await prisma.user.findFirst({ where: { id } });
  return user;
}
