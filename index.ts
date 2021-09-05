import express from 'express';
import * as bodyParser from 'body-parser';
import RouterHandler  from './routes/index';
const morgan = require('morgan');
const app = express();

import mongoose from "mongoose";

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/good-day')
.then( () => console.log('connected'))
.catch((err) => console.log(err));

app.use('/' , new RouterHandler().HandelRoutes());

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
})
