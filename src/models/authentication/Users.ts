import mongoose, { Document, Model, SchemaOptions } from 'mongoose';
import Account, { IAccountShema } from '../trannsactions/AccountModel';


export interface IUsersSchema extends Document {
    username: string,
    walletAddress: string,
    email: string
}

export interface IUsersCreation extends IUsersSchema, Document {
    createAccount(): object;
}

const userSchema = new mongoose.Schema<IUsersSchema, Model<IUsersSchema, IUsersCreation>>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true, updateddAt: false} as SchemaOptions );


userSchema.methods.createAccount = async function() {
    const newAccount = new Account({
        user: `${this.id}`,
        balance: 0,
        investment: 0,
        availableWithdrawal: 0
    } as IAccountShema);
    
    const createdAccount = await newAccount.save();
    return createdAccount;
};

const Users = mongoose.model<IUsersCreation>("Users", userSchema);
export default Users;