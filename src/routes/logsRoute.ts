import express from 'express';
import { getLogById, getLogs } from '../controllers/log.controller';

let router = express.Router();

router.get('/:id', getLogById);
router.get('/', getLogs);

export default router;
