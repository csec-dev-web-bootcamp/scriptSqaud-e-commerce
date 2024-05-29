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
    const respon = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
      image: user.image
    };
    return res.json(respon);
  }),
);
/**usersController.get(
  '/profile',
  authGuard,
  asyncHandler(async (req, res) => {
    const user = await getOneUser(req.user.id);
    return res.json(user);
  }),
);
**/
usersController.put(
  '/me',
  authGuard,
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await updateUser(req.user.id, data);
    const respon = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      image: user.image

    };
    return res.json(respon);
  }),
);

usersController.delete(
  '/me',
  authGuard,
  asyncHandler(async (req, res) => {
    await deleteUser(req.user.id);
    return res.json({ message: 'User deleted successfully' });
  }),
);
export default usersController;
