import { Request, Response } from 'express';

import models from '../../models/index';
const Withdrawal = models.Withdrawals;


const withdrawalController = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;

    const newWithdrawal = new Withdrawal({
        ...data
    })
    try {
        const modelResponse = newWithdrawal.decreaseBalance();
        if(typeof(modelResponse) === "string"){
            const message = `${modelResponse}`;
            throw message;
        }

        const saveDeposit = await newWithdrawal.save();
        return res.status(201).json({
            message: 'Withdrawal was successful.',
            status: "Success",
            data: saveDeposit
        })
    } catch (error) {
        return res.status(400).json({
            message: `Withdrawal was unsuccessful.`,
            status: "Error",
            data: `${error}`
        })
    }
}

export default withdrawalController;