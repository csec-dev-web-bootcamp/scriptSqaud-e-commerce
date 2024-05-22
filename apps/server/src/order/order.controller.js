import { HttpException } from '../constants/http-exception';
import { fetchCartAndItems, deleteCart } from '../cart/cart.service';
import { fetchProfileAddress } from '../profile/profile.service';
import { createOrder, fetchOrdersByUserId, fetchOrderById, deleteOrderById } from './order.server';
import { asyncHandler } from '../helpers/async-handler';

const orderController = express.Router();
orderController.post(
  asyncHandler( async (req, res, next) => {
    try {
      const userId = req.user.id;
      const cart = await fetchCartAndItems(userId);
      if (!cart || cart.total === 0 || cart.items.length === 0) throw new HttpException('Cart does not exist');

      const { address } = await fetchProfileAddress(userId);
      if (!address) throw new HttpException('Profile does not exist');
      const order = await createOrder(userId, address, cart.total, cart.items);
      await deleteCart(userId);

      res.status(201).json({
        success: true,
        message: `Order has been placed successfully`,
      });
    } catch (error) {
      next(error);
    }
  }),
);
orderController.get(
 '/:userId',
 asyncHandler(async (req, res) => {
    const {userId }= req.params;
    const orders = await fetchOrdersByUserId(userId);
    return res.json(orders)
 }),
  
);
 
orderController.get(
  '/:userId',
  asyncHandler(async (req, res) => {
    const orderId = req.params.orderId;
    const order = await fetchOrderById(orderId);
     return res.json(orders)
  }),
 );


  orderController.delete(
    '/:id',
    asyncHandler(async (req, res) => {
      const orderId = req.params.orderId;
      const order = await fetchOrderById(orderId);
      if (!order) throw new HttpException('Order not found');
      if (order.paymentDetail) throw new HttpException('Deletion can not be done for paid order');

      const deletedOrder = await deleteOrderById(orderId);
      return res.json(order)
    }),
  );
export default orderController;