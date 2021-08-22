import { Router } from 'express';
import AuthenticationController from '../controllers/AuthenticationController';

export default class RouterHandler {
    public router : Router = Router();
    private controller = [
        { handler : '/login', name : AuthenticationController}
    ];
    public HandelRoutes() {
        this.controller.forEach((controller) => {
            this.router.use(controller.handler, new controller.name().handleRoutes());
        })
        return this.router;
    }
}
