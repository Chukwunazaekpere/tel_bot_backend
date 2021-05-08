import mongoose, { Document, Model, Schema, SchemaOptions } from 'mongoose';

interface GenerateAddressAttribute extends Document {
    privateKey: string,
    publicKey: string,
    address: string,
    wif: string,
}

interface GenerateAddressInstanceCreation extends Model<GenerateAddressAttribute> {}


const generateAddressSchema = new mongoose.Schema<GenerateAddressAttribute,GenerateAddressInstanceCreation, GenerateAddressAttribute>({
    privateKey: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    wif: {
        type: String,
        required: true
    },
}, {timestamps: true}as SchemaOptions);


const GenerateAddress = mongoose.model("AddressGeneration", generateAddressSchema);
export default GenerateAddress;