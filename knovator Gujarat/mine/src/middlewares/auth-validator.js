import { check, body, oneOf, validationResult } from 'express-validator';

const registerPostValidtor = [
  check('username')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('email').trim().not().isEmpty().normalizeEmail().withMessage('Invalid email address!').bail(),
  check('password').trim().not().isEmpty().isLength({ min: 3 }).withMessage('Password must be 3 length').bail(),
  (req, res, next) => {
    const errors = validationResult(req); // this is returning Result object, not array

    if (!errors.isEmpty()) {
      console.log('Calling register', errors.array());
      res.json({
        errors: errors.array(),
        data: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      });
      return;
    }

    console.log('Calling Next');
    next();
  },
];

const LoginPostValidtor = [
  oneOf([
    check('username').trim().normalizeEmail().not().isEmpty().withMessage('Invalid Username!').bail(),
    check('email').trim().normalizeEmail().not().isEmpty().withMessage('Email is not proper!').bail(),
  ]),
  check('password').trim().not().isEmpty().isLength({ min: 3 }).withMessage('Password must be 3 length').bail(),
  (req, res, next) => {
    const errors = validationResult(req); // this is returning Result object, not array

    if (!errors.isEmpty()) {
      res.json({
        errors: errors.array(),
        data: {
          username: req.body.username,
          password: req.body.password,
        },
      });

      return;
    }

    console.log('Calling Next');
    next();
  },
];

export { registerPostValidtor, LoginPostValidtor };
