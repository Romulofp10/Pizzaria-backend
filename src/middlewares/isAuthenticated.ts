import {NextFunction, Request,Response} from 'express'
import { verify } from 'jsonwebtoken';

interface Payload{
    sub:string;
}


export function IsAuthenticated(req:Request,res:Response,next:NextFunction){
    
    const authToken = req.headers.authorization;

    //empty token
    if(!authToken){
        return res.status(401).end();
    }

    //split - barear from token
    const [,token] = authToken.split(" ")
    console.log(token)

    //validation token
    try {

        const {sub} = verify(token,process.env.SECRET) as Payload
        //Get id from token and put on a variable on request.
        req.user_id=sub;
        
    } catch (error) {
        //not authorized
        return res.status(401).end();
        
    }

   return next();

}