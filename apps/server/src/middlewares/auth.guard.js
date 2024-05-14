import { findUserById } from '../auth/auth.service';
import validateJwtToken from '../helpers/validate-jwt-token';

export function authGuard(req, res, next) {
  async function validate() {
    const accessToken = req.headers.authorization?.split(' ')[1];
    const payload = validateJwtToken(accessToken);
    const user = await findUserById(payload.userId);
    req.user = user;
    next();
  }
  return Promise.resolve(validate()).catch(next);
}