"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAuthenticated = IsAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function IsAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    //empty token
    if (!authToken) {
        return res.status(401).end();
    }
    //split - barear from token
    const [, token] = authToken.split(" ");
    console.log(token);
    //validation token
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.SECRET);
        //Get id from token and put on a variable on request.
        req.user_id = sub;
    }
    catch (error) {
        //not authorized
        return res.status(401).end();
    }
    return next();
}
