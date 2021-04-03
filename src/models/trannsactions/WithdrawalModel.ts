import mongoose, {Document, SchemaOptions} from 'mongoose';
import Account, { IAccountModel } from './AccountModel';
import User from '../authentication/Users';


export interface IWithdrawalSchema extends Document {
    username: string,
    amount: number, 
    transactionId: string
}

export interface IWithdrawalModel extends IWithdrawalSchema, Document {
    decreaseBalance(): number
}

const withdrawalSchema = new mongoose.Schema<IWithdrawalSchema>({
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


withdrawalSchema.methods.decreaseBalance = async function() {
    const username = this.username;
    try {
        const user = await User.findOne({username});
        if(user === null){
            const message = "Unregistered user attempting to make a withdrawal."
            throw message;
        }
        const userAccount = await Account.findOne({user: user._id}); 
        console.log("userAccount: ", userAccount);
        
        const previousBalance = Number(userAccount!.balance);
        const newBalance = previousBalance - this.amount;
        userAccount!['balance'] = newBalance;
        await userAccount!.save();
        
        return true;
    } catch (error) {
        return error;
    }

}

const Withdrawals = mongoose.model<IWithdrawalModel>('Withdrawals', withdrawalSchema);
export default Withdrawals;
