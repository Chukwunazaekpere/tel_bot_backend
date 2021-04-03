import { Router } from 'express';
const appRouter = Router();
//========================= imports =====================
import transactionsRouter from './transactions';
import authRouter from './authentication';

import controllers from '../controllers';
//=======================================================

appRouter.use('/auth', authRouter);
appRouter.use('/transactions', transactionsRouter);
appRouter.get("/", controllers.homeController)


export default appRouter;
