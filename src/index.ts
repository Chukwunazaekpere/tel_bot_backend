import dotenv from 'dotenv';
dotenv.config();


import express, { Application } from 'express';
const server: Application = express();


//======================= imports ======================
import dbConnect from './config/dbConnect';
import routers from './routes';
//======================================================

// settings


//middlewares
server.use(express.json());


// routes
server.use('/api', routers);



const PORT = process.env.PORT || 5000;
const main = () => {
    server.listen(PORT, () => {
        dbConnect();
        console.log("\tServer running at port: ", PORT);
        
    })
}

main();