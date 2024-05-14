import { HttpException } from '../helpers/http-exception';
import prisma from '../helpers/prisma-client';

export const createEmptyCart = async () => {
    const newCart = await prisma.cart.create({
        data: {
            total: 0,
            items: []
        }
    });
    return newCart;
};

export const findExistingProduct = (items, productId) => {
    const productIndex = items.findIndex(item => item.productId === productId);
    return productIndex;
};