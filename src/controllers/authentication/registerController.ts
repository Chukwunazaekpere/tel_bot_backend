import { Request, Response } from 'express';

import models from '../../models/index';
const Users = models.Users;

import jwt from 'jsonwebtoken';


const registerController = async (req:Request, res: Response): Promise<Response> => {
    const { username } = req.body;
    
    const newUser = new Users({
        username
    });
    try {
        const userExists = await Users.findOne({username});        
        if(userExists !== null){
            throw ("You're a registered user.")
        };

        const savedUser = await newUser.save();
        savedUser.createAccount();

        const userPayload = {...savedUser}
        const accesstoken = jwt.sign(userPayload, process.env.ACCESS_TOKEN as string);

        return res.status(201).json({
            message: 'New user registered.',
            status: 'Successful',
            data: accesstoken
        });
    } catch (error) {
        return res.status(500).send({
            message: `Failed to register user.`,
            status: 'Error',
            data: `${error}`
        });
    };
}


export default registerController;