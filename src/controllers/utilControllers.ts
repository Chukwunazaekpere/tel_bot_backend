import { Request, Response } from 'express';


export const teamController = async (req: Request, res: Response): Promise<Response> => {
    const message = "Hello there from the AmcorTrading Team.";
    return res.send({
        message
    })
};


export const supportController = async (req: Request, res: Response): Promise<Response> => {
    const message = {
        Email: "amcortradingbot@gmail.com",
        Team: "@amcortradingsupport_team",
        Assisst: "@Amcortrading_Assists"
    }
    return res.send({
        ...message
    })
};