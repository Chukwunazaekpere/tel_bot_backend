
//======================= authentication imports ====================
import registerController from './authentication/registerController';
import usersController from './authentication/usersAccountController';
import adminRegisterController from './authentication/adminRegisterController';


import homeController from './transactions/homeController';
//====================== transactions inport ========================
import balanceController from './transactions/balanceController';
import depositController from './transactions/AddressGenerationController';
import withdrawalController from './transactions/withdrawalsController';
import reinvestController from './transactions/investmentController';


import { supportController, teamController} from './utilControllers';

import addressGenerator from './transactions/AddressGenerationController';

const controllers = {
    balanceController,
    depositController,
    withdrawalController,
    reinvestController,
    addressGenerator,
    //========== auth =================
    registerController,
    usersController,
    adminRegisterController,
    //======================
    homeController,
    //======================
    supportController,
    teamController
}

export default controllers;