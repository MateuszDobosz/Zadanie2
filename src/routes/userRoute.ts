import express from 'express';
import { createUser, getUser, getUsers } from '../controllers/user.controller';
import { verifyAdmin, verifyCreate } from '../middlewares/auth';

let router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', verifyAdmin, createUser);

export default router;
