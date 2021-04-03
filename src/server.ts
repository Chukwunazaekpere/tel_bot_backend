import express, { Application } from 'express';
const server: Application = express();

if (process.env.NODE_ENV == 'development')
require('dotenv').config({ silent: true });
//======================= imports ======================
import routers from './routes';
//======================================================

// settings


//middlewares
server.use(express.json());


// routes
server.use('/api', routers);


export default server;