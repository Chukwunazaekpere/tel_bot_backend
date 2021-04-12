import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: "./src/config/config.env"});

const connectDb = async () => {
    console.log('\n\t Initiating DB connection...');
    try {
        await mongoose.connect(process.env.MONGO_URI_DEV as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('\n\t DB connected successfully...');
        
    } catch (error) {
        console.error(error.message);
    };
};


export default connectDb;