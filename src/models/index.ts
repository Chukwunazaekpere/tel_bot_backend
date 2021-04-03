import Account from './trannsactions/AccountModel';
import Withdrawals from './trannsactions/WithdrawalModel';
import Deposits from './trannsactions/DepositModel';
import Investments from './trannsactions/InvestModel';

//=============== auth model =====================
import Users from './authentication/Users';


const models = {
    Account,
    Withdrawals,
    Deposits,
    Users,
    Investments
}

export default models;