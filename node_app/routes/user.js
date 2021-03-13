import express from 'express';
import { validateData } from '../common/validation';
import { checkRole } from '../common/checkRole';
import UserController from '../controllers/user.controller';
import Joi from '@hapi/joi';
const jwt = require('jsonwebtoken');

const router = express.Router();
const controller = new UserController();

router.get(
    '/',
    checkRole(['director']),
    validateData({
        schemaQuery: Joi.object({
            offset: Joi.number().required(),
            limit: Joi.number().required()
        })
    }),
    controller.action('list')
);

export default router;