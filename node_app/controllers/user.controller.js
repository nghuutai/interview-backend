import PureController from './pure.controller';
import UserService from '../services/user.service';

class UserController extends PureController {
    async list(req, res) {
        const { offset, limit } = req.query;
        const data = await UserService.list({ offset, limit });
        // console.log('&&&&&&&&xs', data)
        return res.status(200).send(data);
    }
}

export default UserController;