import express, { Router } from 'express';
import userRoute from './userRoute';
import logsRoute from './logsRoute';
import { verifyRead } from '../middlewares/auth';

let internalRouter: Router = express.Router();
let publicRouter: Router = express.Router();

internalRouter.use('/users', userRoute);
publicRouter.use('/logs', verifyRead, logsRoute);

export { internalRouter, publicRouter };
