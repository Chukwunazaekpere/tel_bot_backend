import { Request, Response } from 'express';




const homeController = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({
        message: 'This is AmcorTraadingBot.',
        status: "Success",
        data: null
    });

}

export default homeController;