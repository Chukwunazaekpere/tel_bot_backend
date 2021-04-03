import { Router } from 'express';
import controllers from '../controllers';

const router: Router = Router();

router.use('/register', controllers.registerController)
router.use('/users-account', controllers.usersController)

export default router;