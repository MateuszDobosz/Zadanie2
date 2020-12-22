import express from 'express';
import { getLogById, getLogs } from '../controllers/log.controller';
import { verifyRead } from '../middlewares/auth';

let router = express.Router();

router.get('/:id', verifyRead, getLogById);
router.get('/', verifyRead, getLogs);

export default router;
