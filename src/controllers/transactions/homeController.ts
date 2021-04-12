import { Request, Response } from 'express';

const homeController = async (req: Request, res: Response): Promise<Response> => {
    return res.send({
        message: 'This is AmcorTraadingBot; welcome.',
        status: "Success",
    })
};

export default homeController;