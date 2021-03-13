
import jwt from 'jsonwebtoken';
import { Unauthorized } from './error';

export const verifyToken = () => (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token) throw new Unauthorized('No token provided');

    try {
        jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
            if (err) {
                next(new Unauthorized('Invalid access token'));
            }
            res.locals.user = decoded;
            next();
        });
    } catch(err) {
        next(new Unauthorized('Invalid access token'));
    }
}


