import { Request, Response } from 'express';
import models from '../../models/index';
const Account = models.Account;


const usersAccountController = async (req:Request, res: Response): Promise<Response> => {
    try {
        const users = await Account.find();        

        return res.status(200).json({
            message: 'All users.',
            status: 'Successful',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            message: `${error}`,
            status: 'Error',
            data: null
        });
    };
}

export default usersAccountController;