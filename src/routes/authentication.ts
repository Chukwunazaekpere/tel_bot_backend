import { Router } from 'express';
import controllers from '../controllers/index';
import middlewares from '../middleware';

const router: Router = Router();

router.use('/register', middlewares.authMiddleware, controllers.registerController)
router.use('/register-admin', controllers.adminRegisterController)
router.use('/users-account', controllers.usersController)

export default router;