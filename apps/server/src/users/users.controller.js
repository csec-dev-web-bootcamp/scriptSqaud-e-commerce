import express from 'express';
import { authGuard } from '../auth/auth.guard';
import { asyncHandler } from '../helpers/async-handler';
import { deleteUser, getOneUser,updateUser } from '../users/users.service';

const usersController = express.Router();

usersController.get(
  '/me',
  authGuard,
  asyncHandler(async (req, res) => {
    const user = await getOneUser(req.user.id);
    return res.json(user);
  }),
);
usersController.put(
  '/:id',
 
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const user = await updateUser(id, data);
    return res.json(user);
  }),
);
usersController.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await deleteUser(id);
    return res.json(user);
  }),
);

export default usersController;
