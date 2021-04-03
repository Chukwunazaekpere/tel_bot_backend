import { Request, Response } from 'express';

import models from '../../models';
const Account = models.Account;
const Users = models.Users;


const balanceController = async (req: Request, res: Response): Promise<Response> => {
    const { username } = req.body;
    try {
        const userExists = await Users.findOne({ username });
        if(userExists === null){
            const message = "Unregistered user.";
            throw message;
        }
        const userId = userExists.id;
        const usersAccount = await Account.findOne({user: userId});
        const balance = usersAccount!.balance;
        return res.status(200).json({
            message: 'Account Balance',
            status: "Success",
            data: balance
        })
    } catch (error) {
        return res.status(500).json({
            message: `Error fetching balance`,
            status: "Error",
            data: `${error}`
        })
    }
}

export default balanceController;