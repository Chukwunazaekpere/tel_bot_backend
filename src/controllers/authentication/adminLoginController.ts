import dotenv from 'dotenv';
dotenv.config({ path: "../../src/config/config.env"});

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import models from '../../models/index';
const Admin = models.Admin;


const adminLoginController = async (req:Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    
    try {
        const adminExists = Admin.findOne({email});        
        if(adminExists !== null){
            throw ("This email account has been registered with a user.")
        };

        const hashPassword = bcrypt.hash(password, 9);
        const newAdmin = new Admin({
            ...req.body,
            password: hashPassword
        });

        const savedAdmin = newAdmin.save();
        await Promise.all([adminExists, hashPassword, savedAdmin]);

        const accesstoken = jwt.sign(savedAdmin, process.env.ACCESS_TOKEN as string )
        return res.status(201).json({
            message: 'New Admin registered.',
            status: 'Successful',
            data: savedAdmin
        });
    } catch (error) {
        return res.status(500).json({
            message: `Failed to register admin.`,
            status: 'Error',
            data: `${error}`
        });
    };
};


export default adminLoginController;