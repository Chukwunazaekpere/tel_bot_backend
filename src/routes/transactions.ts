import { Router } from 'express';
import controllers from '../controllers';


const router: Router = Router();

router.post("/deposit", controllers.depositController);
router.get("/balance", controllers.balanceController);
router.post("/withdrawal", controllers.withdrawalController);
router.post("/invest", controllers.reinvestController);


export default router;