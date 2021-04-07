import mongoose, { Document, Model, Schema, SchemaOptions } from 'mongoose';


export interface IAdminSchema extends Document {
    username: string,
}

export interface IAdminModel extends IAdminSchema, Document {
    createAccount(): object;
}

const adminSchema = new mongoose.Schema<IAdminSchema>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true
    }
}, { timestamps: true, updateddAt: false} as SchemaOptions );



const Admin = mongoose.model<IAdminModel>("Admin", adminSchema);
export default Admin;