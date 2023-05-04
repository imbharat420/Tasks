import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import passport from 'passport';
import { handleError } from 'req-error';

//routes

import UserRoute from './routes/user.js';
import jwtMiddleware from './config/passport.js';

const app = express();

// app.use();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', UserRoute);

app.use(passport.initialize());
app.use(jwtMiddleware);

app.get('/protected', function (req, res) {
  console.log(req.user);
  res.json({ message: 'Success! You are authenticated.' });
});

handleError(app);

export default app;
