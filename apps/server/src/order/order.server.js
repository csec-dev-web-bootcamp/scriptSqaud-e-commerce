import { HttpException } from '../constants/http-exception';
import prisma from '../helpers/prisma-client';

export async function createOrder(userId, address, totalPrice, items) {
    try {
      return await prisma.$transaction(async (prisma) => {
        // Update product quantities for each item
        for (const item of items) {
          const updatedProduct = await prisma.product.update({
            where: { id: item.productId },
            data: {
              stock: {
                decrement: item.quantity,
              },
            },
          });
          if (updatedProduct.stock < 0) throw new HttpException ('Stock Finished');
        }
  
        // Create the order record
        const order = await prisma.order.create({
          data: {
            userId,
            address,
            totalPrice,
            orderDetail: {
              create: items,
            },
          },
        });
  
        return order;
      });
    } catch (HttpException) {
      console.error(HttpException);
      throw HttpException; // Re-throw for proper error handling in routes
    }
  }
  
  // Function to fetch orders for a user by userId
export async function getOrdersByUserId(userId) {
    return await prisma.order.findMany({
      where: {
        userId,
      },
    });
  }
  
  // Function to fetch a specific order by orderId
export async function getOrderById(orderId) {
    return await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        paymentDetail: true,
      },
    });
  }
  
  // Function to fetch order details for payment by orderId
export async function getOrderForPayment(orderId) {
    return await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      select: {
        address: true,
        totalPrice: true,
        orderDetail: {
          select: {
            productId: true,
            quantity: true,
          },
        },
        paymentDetail: true,
      },
    });
  }
  
  // Function to update order with payment and track information
 export  async function updateOrderWithPaymentAndTrack(userId, orderId, amount, currency, address) {
    return await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        paymentDetail: {
          create: {
            userId,
            amount,
            currency,
          },
        },
        trackOrder: {
          create: {
            address,
          },
        },
      },
    });
  }
  
  // Function to delete an order by orderId
  export async function deleteOrderById(orderId) {
    return await prisma.order.delete({
      where: {
        id: orderId,
      },
    });
  }
  
  