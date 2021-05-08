import dotenv from 'dotenv';
dotenv.config();

import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

import models from '../../models/index';
const Deposit = models.Deposits;


interface GenerateAddress {
    privateKey: string,
    publicKey: string,
    address: string,
    wif: string,
}



const DepositController = async (req: Request, res: Response): Promise<Response> => {
    
    // generate address
    try {
        const data: AxiosResponse<GenerateAddress> = await axios.post(`${process.env.BASE_URL}/v1/bc/btc/${process.env.NETWORK}/txs/new`, {}, {
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": process.env.CRYPTO_APIS
            }
        });
        let generatedAddress = data.data.address;

        return res.send({
            message: 'Please pay to this address.',
            address: generatedAddress
        })
    } catch (error) {
        return res.status(400).json({
            message: `Deposit was unsuccessful.`,
            status: "Error",
            data: `${error}`
        })
    }
}

export default DepositController;



