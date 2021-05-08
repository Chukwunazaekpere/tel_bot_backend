import { Router } from 'express';
import controllers from '../controllers/index';
import middlewares from '../middleware';

const authRouter: Router = Router();

authRouter.use('/register', middlewares.authMiddleware, controllers.registerController)
authRouter.use('/register-admin', controllers.adminRegisterController)
authRouter.use('/users-account', controllers.usersController)

export default authRouter;