import passport from 'passport';
import localStrategy from 'passport-local';
import UserModel from '../model/model';

localStrategy = localStrategy.Strategy;

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });

        return done(null, user);
      } catch (error) {
        done(error);
      }
    },
  ),
);
