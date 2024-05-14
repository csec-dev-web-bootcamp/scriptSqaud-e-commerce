import { HttpException } from '../helpers/http-exception';
import prisma from '../helpers/prisma-client';

export async function createEmptyCart(data) {
    const newCart = await prisma.product.create({
        total: 0,
        items: []
    });
    return newCart;
  }