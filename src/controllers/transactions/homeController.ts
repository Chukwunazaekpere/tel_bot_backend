import { Request, Response } from 'express';




const homeController = (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'This is AmcorTraadingBot.',
        status: "Success",
        data: null
    });

}

export default homeController;