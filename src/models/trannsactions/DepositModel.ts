import mongoose, {Document, Model, SchemaOptions} from 'mongoose';
import Account, { IAccountModel } from './AccountModel';
import User from '../authentication/Users';


export interface IDepositSchema extends Document {
    username: string,
    amount: number, 
    transactionId: string
}

export interface IDepositQuery extends IDepositSchema, Document  {
    increaseBalance(): Promise<IDepositQuery>
}

export interface IDepositModel extends Model<IDepositQuery> {
    increaseBalance(): Promise<IDepositQuery>
}


const depositSchema = new mongoose.Schema<IDepositSchema>({
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


depositSchema.methods.increaseBalance = async function() {
    const username = this.username;
    try {
        const user = await User.findOne({username});
        if(user === null){
            const message = "Unregistered user attempting to make a deposit.";
            throw message;
        }
        const userAccount = await Account.findOne({user: user._id}); 
        console.log("userAccount: ", userAccount);
        
        const previousBalance = Number(userAccount?.balance);
        const depositedAmount = this.amount;
        const newBalance = previousBalance + depositedAmount;
        userAccount!['balance'] = newBalance;
        await userAccount!.save();
        
        return true;
    } catch (error) {
        return error;
    }

}

const Deposits = mongoose.model<IDepositQuery, IDepositModel>('Deposits', depositSchema);
export default Deposits;
