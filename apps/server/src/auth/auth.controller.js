import express from 'express';
import { asyncHandler } from '../helpers/async-handler';
import { createUser, loginUser } from './auth.service';
import generateJwtToken from './generate-jwt-token';

const authController = express.Router();

authController.post(
  '/register',
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await createUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  }),
);

authController.post(
  '/login',
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await loginUser(data);
    const jwt = generateJwtToken(user);
    return res.json({ user, jwt });
  }),
);

export default authController;
