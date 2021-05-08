import dotenv from 'dotenv';
dotenv.config();

import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import GenerateAddress from '../../models/trannsactions/GeneratedAddress';

import {GenerateAddressInterface} from '../../types/Types'; 


const AddressGenerationController = async (req: Request, res: Response): Promise<Response> => {
    try {
         // generate address
        const data: AxiosResponse<GenerateAddressInterface> = await axios.post(`${process.env.BASE_URL}/v1/bc/btc/${process.env.NETWORK}/address`, {
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": process.env.CRYPTOAPIS_KEY 
            }
        });
        let { address, privateKey, publicKey, wif } = data.data;
        
        const generatedAddressDetails = GenerateAddress.create({
            privateKey,
            publicKey,
            address,
            wif
        });
        (await generatedAddressDetails).save();
        return res.status(201).send({ 
            message: 'Please copy this address and click on the link to make deposit..',
            address: address,
            link: "https://localhost/api/transactions/deposit"
        });
    } catch (error) {
        return res.status(500).send({
            error
        })
    }
   
}

export default AddressGenerationController;



