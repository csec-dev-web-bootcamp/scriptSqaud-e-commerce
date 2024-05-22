import { formatZodError } from '../constants/format-zod-error';
import { HttpException } from '../constants/http-exception';
import { createOrderSchema } from "./order.validation"

export function setOrderPipe(req, res, next) {
    const data = req.body;
    const result = createOrderSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }

  export function getOrdersPipe(req, res, next) {
    const data = req.body;
    const result = createOrderSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }

  export function getOrderPipe(req, res, next) {
    const data = req.body;
    const result = createOrderSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }

  export function deletedOrderPipe(req, res, next) {
    const data = req.body;
    const result = createOrderSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }