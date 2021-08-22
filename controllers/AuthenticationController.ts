import express , { Router, Response, Request  } from 'express';
import BaseController from './BaseController';

/**
 * Controller handling auth routes
 */
export default class AuthenticationController extends BaseController {

    /**
     * attach routes under login path
     * @returns {Router}
     */
    handleRoutes(): Router {
        this.router.get('/getAllUser', this.getAllUser);
        return this.router;
    }

    /**
     *
     * @param {Request} request
     * @param {Response} response
     */
    getAllUser(request : Request, response : Response) : void {
        response.send({ body: "get All User speared function" });
    }

}
