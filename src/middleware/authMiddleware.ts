import express, { Request, Response, NextFunction} from 'express';




const authMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const authHeader = req.headers;
    console.log("Cookies: ", authHeader);
    
    next();
}

export default authMiddleware;