import { formatZodError } from '../constants/format-zod-error';
import { HttpException } from '../constants/http-exception';
import { createProfileSchema } from './profile.validation';

export function createProfilePipe(req, res, next) {
  const data = req.body;
  const result = createProfileSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateProfilePipe(req, res, next) {
  const data = req.body;
  const result = createProfileSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}