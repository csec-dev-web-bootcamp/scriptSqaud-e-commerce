import jwt from 'jsonwebtoken';


export function  jwtDecode ( accessToken) {
  const secretKey = process.env.JWT_SECRETE_KEY;
    var isTrue = false
    if (jwt.verify(accessToken, secretKey))
     isTrue = true
    return  isTrue
}