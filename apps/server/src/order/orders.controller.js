import express from "express";
// import { PrismaClient } from "@prisma/client";
import prisma from "../helpers/prisma-client";

import chapa from "chapa";
import { authGuard } from "../auth/auth.guard.js";
import { asyncHandler } from "../helpers/async-handler.js";
import { v4 as uuidv4 } from "uuid";
import request from "request";
import "dotenv/config";

const ordersController = express.Router();

ordersController.post(
  "",
  authGuard,
  // createOrderPipe,
  asyncHandler(async (req, res) => {
    const user = req.user;
    const data = req.body;
    const tx_ref = uuidv4();

    if (!user.id) {
      console.log();
      return res.status(400).json({ message: "User ID is required" });
    }

    // const order = await createOrder({
    //   orderItems: data.orderItems,
    //   paymentRef: tx_ref,
    //   userId: user.id,
    // });
    const secretKey = process.env.CHAPA_SECRET_KEY;
    console.log(user);
    console.log(data);

    try {
      const order = await createOrder({
        orderItems: data,
        paymentRef: tx_ref,
        userId: user.id,
      });

      const options = {
        method: "POST",
        url: "https://api.chapa.co/v1/transaction/initialize",
        headers: {
          Authorization: secretKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: order.totalPrice.toString(),
          currency: "ETB",
          email: user.email,
          first_name: user.firstName,
          last_name: user.lastName,
          phone_number: "0912345678",
          tx_ref: order.paymentRef,
          callback_url:
            "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
          return_url: "http://localhost:3000/",
          "customization[title]": "Payment for my favourite merchant",
          "customization[description]": "I love online payments",
        }),
      };

      request(options, function (error, response, body) {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Payment initialization failed" });
        }

        const responseData = JSON.parse(body);
        console.log(responseData);

        return res.json(responseData);
      });
    } catch (error) {
      console.log(error);
    }
  })
);

export async function createOrder(data) {
  console.log("this ", data);
  const orderData = {
    paymentRef: data.paymentRef,
    totalPrice: 0,
    user: {
      connect: {
        id: data.userId,
      },
    },
    orderItems: {
      createMany: {
        data: data.orderItems,
        skipDuplicates: true,
      },
    },
  };

  let order = await prisma.order.create({
    data: orderData,
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  let totalPrice = 0;
  order.orderItems.forEach((item) => {
    totalPrice += item.product.price * item.quantity;
  });
  console.log("this is total price" + totalPrice);

  order = await prisma.order.update({
    where: { id: order.id },
    data: {
      totalPrice: totalPrice,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return order;
}

export default ordersController;
