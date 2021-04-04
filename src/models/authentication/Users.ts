import mongoose, { Document, Model, Schema, SchemaOptions } from 'mongoose';
import Account, { IAccountShema } from '../trannsactions/AccountModel';


export interface IUsersSchema extends Document {
    username: string,
}

export interface IUsersModel extends IUsersSchema, Document {
    createAccount(): object;
}

const userSchema = new mongoose.Schema<IUsersSchema>({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
}, { timestamps: true, updateddAt: false} as SchemaOptions );

userSchema.method("createAccount", async function() {
    const newAccount = new Account({
        user: `${this.id}`,
        balance: 0,
        investment: 0,
        availableWithdrawal: 0
    } as IAccountShema);
    const createdAccount = await newAccount.save();
    return createdAccount;
})

const Users = mongoose.model<IUsersModel>("Users", userSchema);
export default Users;