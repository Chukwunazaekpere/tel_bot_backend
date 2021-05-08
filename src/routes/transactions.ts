import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middleware'; 


const transactionRouter: Router = Router();

transactionRouter.post("/deposit", controllers.depositController);
transactionRouter.get("/generate-address", controllers.addressGenerator);
transactionRouter.get("/balance", controllers.balanceController);
transactionRouter.post("/withdrawal", controllers.withdrawalController);
transactionRouter.post("/invest", controllers.reinvestController);

export default transactionRouter;