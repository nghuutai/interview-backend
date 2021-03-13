import express from 'express';
import user from './user';
import { verifyToken } from '../common/verifyToken';

const router = express.Router();

router.use('/api/user', verifyToken(), user);

export default router;