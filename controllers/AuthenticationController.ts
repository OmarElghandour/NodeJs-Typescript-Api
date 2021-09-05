import { Router, Response, Request } from 'express';
import BaseController from './BaseController';
import User from '../models/User';
import UserSchema  from '../schema/User';
import bcrypt from 'bcrypt';

/**
 * Controller handling auth routes
 */
export default class AuthenticationController extends BaseController {

    /**
     * attach routes under login path
     * @returns {Router}
     */
    handleRoutes(): Router {
        this.router.post('/register', this.registerUser);
        this.router.post('/login', this.loginUser);
        return this.router;
    }


    /**
     * checking for user credentials by username or email
     * @param request 
     * @param response 
     * @returns {Response}
     */
    async loginUser(request : Request, response : Response) : Promise<any> {

        const userEmail = await User.findOne({ email : request.body.email });

        const userName = await User.findOne({ userName : request.body.userName });

        const user = userEmail || userName;

        if (!user) {
            return response.send({message : 'email or password doesnt exist' });
        }

        const password = await  bcrypt.compare(request.body.password, user.password);

        if (!password) {
            return response.send({message : 'email or password doesnt exist' });
        }

        return response.send({'message' : 'valid email and password'});
    }

    /**
     * Method to create new user 
     * @param {Request} request
     * @param {Response} response 
     */
    async registerUser(request : Request, response : Response) : Promise<any> {
        const {error} =  UserSchema.validate(request.body);
        if (error) {
            return response.send({'validationError' : error });
        
        }

        const emailExist = await User.findOne({ email : request.body.email });
        if (emailExist) {
            return response.send({'error' : 'email' + request.body.email + 'is already exist'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const user = new User({
            userName : request.body.userName,
            email : request.body.email,
            password : hashedPassword
        });
        
        await user.save()
        .then(() => response.send({ message: user._id }))
        .catch(err => response.send({ err : err }));
    }
}
