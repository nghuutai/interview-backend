import UserController from "../controllers/user.controller";
import db from '../models/';

class UserService {
    static async list({ offset, limit }) {
        const users = await db.User.findAll({
            attributes: ['id', 'name', 'role', 'created_at', 'updated_at'],
            offset,
            limit,
        }).catch((err) => err);
        return users;
    }
}

export default UserService;