import mongoose, {Document, SchemaOptions} from 'mongoose';
import Account, { IAccountCreation } from './AccountModel';
import User from '../authentication/Users';


export interface IInvestmentSchema extends Document {
    username: string,
    amount: number, 
    transactionId: string
}

export interface IInvestmentCreation extends IInvestmentSchema, Document {
    increaseInvestment(): number
}

const investmentSchema = new mongoose.Schema<IInvestmentSchema>({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionId: {
        type: Number,
        required: false
    },
}, {timestamps: true, updatedAt: false} as SchemaOptions );


investmentSchema.methods.increaseInvestment = async function() {
    const username = this.username;
    try {
        const user = await User.findOne({username});
        if(user === null){
            const message = "Unregistered user attempting to invest."
            throw message
        }
        const userAccount = await Account.findOne({user: user._id}); 
        console.log("userAccount: ", userAccount);
        
        const investedAmount = this.amount;
        const previousBalance = Number(userAccount?.balance);
        if(previousBalance === 0){
            throw "Insufficient funds."
        }
        const newBalance = previousBalance - investedAmount;
        
        const previousInvestment = Number(userAccount?.investment);
        const newInvestment = previousInvestment + investedAmount;

        userAccount!['balance'] = newBalance;
        userAccount!['investment'] = newInvestment;
        await userAccount!.save();
        
        return true;
    } catch (error) {
        return error;
    }

}

const Investments = mongoose.model<IInvestmentCreation>('Investments', investmentSchema);
export default Investments;
