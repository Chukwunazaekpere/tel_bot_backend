import Account from './trannsactions/AccountModel';
import Withdrawals from './trannsactions/WithdrawalModel';
import Deposits from './trannsactions/DepositModel';
import Investments from './trannsactions/InvestModel';

//=============== auth model =====================
import Users from './authentication/Users';
import Admin from './authentication/Admin';



const models = {
    Account,
    Withdrawals,
    Deposits,
    Users,
    Admin,
    Investments
}

export default models;