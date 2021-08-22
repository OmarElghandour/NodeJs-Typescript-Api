import { Router, Application } from 'express';

export default abstract class BaseController {
    public router: Router = Router();
    abstract  handleRoutes(App : Application) : Router;
}
