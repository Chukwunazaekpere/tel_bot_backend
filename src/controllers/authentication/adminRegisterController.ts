import dotenv from 'dotenv';
dotenv.config({ path: "../../src/config/config.env"});

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import models from '../../models/index';
const Admin = models.Admin;


const adminRegisterController = async (req:Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    
    try {
        const adminExists = await Admin.findOne({email});    
        if(adminExists !== null){
            throw ("This email account has been registered with a user.")
        };
        console.log("Admin: ", adminExists)    

        const hashPassword = await bcrypt.hash(password, 9);
        console.log("Hashed password: ");
        const newAdmin = new Admin({
            ...req.body,
            password: hashPassword
        });

        const savedAdmin = await newAdmin.save();
        // await Promise.all([adminExists, hashPassword, savedAdmin]);
        console.log("Saved admin: ");
        
        const userPayload = {...savedAdmin};
        const accesstoken = jwt.sign(userPayload, process.env.ACCESS_TOKEN as string )
        return res.status(201).json({
            message: 'New Admin registered.',
            status: 'Successful',
            data: savedAdmin,
            token: accesstoken
        });
    } catch (error) {
        return res.status(500).json({
            message: `Failed to register admin.`,
            status: 'Error',
            data: `${error}`
        });
    };
};


export default adminRegisterController;