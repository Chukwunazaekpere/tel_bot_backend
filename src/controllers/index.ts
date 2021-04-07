
//======================= authentication imports ====================
import registerController from './authentication/registerController';
import usersController from './authentication/usersAccountController';
import adminRegisterController from './authentication/adminRegisterController';


import homeController from './transactions/homeController';
//====================== transactions inport ========================
import balanceController from './transactions/balanceController';
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
    usersController,
    adminRegisterController,
    //======================
    homeController
}

export default controllers;