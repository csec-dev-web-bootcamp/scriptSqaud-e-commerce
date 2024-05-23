import { HttpException } from '../constants/http-exception';
import prisma from '../helpers/prisma-client';

export async function createProfile(data) {
  const profile = await prisma.profile.create({
    data: data,
  });
  return profile;
}

export async function getOneProfile(userId) {
  const profile = await prisma.profile.findUnique({
    where: { userId },
  });
  if (!profile) {
    throw new HttpException('Profile not found', 404);
  }
  return profile;
}

export async function updateProfile(userId, data) {
  const profileExist = await prisma.profile.findUnique({
    where: { userId },
  });
  if (!profileExist) {
    throw new HttpException('Profile not found', 404);
  }
  const profile = await prisma.profile.update({
    where: { userId },
    data: data,
  });
  return profile;
}

export async function deleteProfile(userId) {
  const profileExist = await prisma.profile.findUnique({
    where: { userId },
  });
  if (!profileExist) {
    throw new HttpException('Profile not found', 404);
  }
  const profile = await prisma.profile.delete({
    where: { userId },
  });
  return profile;
}

export async function fetchProfileAddress(userId) {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    select: { address: true },
  });
  if (!profile) {
    throw new HttpException('Profile not found', 404);
  }
  return profile;
}
