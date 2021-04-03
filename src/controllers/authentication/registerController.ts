import { Request, Response } from 'express';

import models from '../../models/index';
const Users = models.Users;


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
        return res.status(201).json({
            message: 'New user registered.',
            status: 'Successful',
            data: savedUser
        });
    } catch (error) {
        return res.status(400).json({
            message: `Failed to register user. ${error}`,
            status: 'Error',
            data: null
        });
    };
}


export default registerController;