
//======================= authentication imports ====================
import registerController from './authentication/registerController';
import usersController from './authentication/usersAccountController';


//====================== transactions inport ========================
import balanceController from './transactions/accountControllers';
import depositController from './transactions/depositController';
import withdrawalController from './transactions/withdrawalsController';
import reinvestController from './transactions/investmentController';


const controllers = {
    balanceController,
    depositController,
    withdrawalController,
    reinvestController,
    //========== auth =================
    registerController,
    usersController
}

export default controllers;