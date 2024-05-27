import { HttpException } from '../constants/http-exception';
import prisma from '../helpers/prisma-client';

export async function createProduct(data) {
  const product = await prisma.products.create({
    data: data,
  });
  return product;
}

export async function getManyProducts(query) {
  const products = await prisma.products.findMany();
  return products;
}

export async function getOneProduct(id) {
  const product = await prisma.products.findFirst({ where: { id } });
  if (!product) {
    throw new HttpException('Product not found', 404);
  }
  return product;
}

export async function updateProduct(id, data) {
  const productExist = await prisma.products.findFirst({ where: { id } });
  if (!productExist) {
    throw new HttpException('Product not found', 404);
  }
  const product = await prisma.products.update({
    where: { id },
    data: data,
  });

  return product;
}

export async function deleteProduct(id) {
  const productExist = await prisma.products.findFirst({ where: { id } });
  if (!productExist) {
    throw new HttpException('Product not found', 404);
  }
  const product = await prisma.products.findFirst({ where: { id } });
  return product;
}
