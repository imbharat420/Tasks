const { check, validationResult } = require('express-validator');
const pool = require('../config/pool');
const verifyToken = require('../utils/verifyToken');

exports.registerGetValidtor = [
  (req, res, next) => {
    if (req.cookies.jwt) {
      return res.redirect('/');
    }
    next();
  },
];

exports.loginGetValidtor = [
  (req, res, next) => {
    if (req.cookies.jwt) {
      return res.redirect('/');
    }
    next();
  },
];

exports.loginPostValidtor = [
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is also important')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.render('login', { errors: errors.array() });
    // return res.status(422).json({errors: errors.array()});
    next();
  },
];

exports.registerPostValidtor = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage('Password must be 8 length')
    .bail(),
  check('cpassword')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage('Confirm password is not same as password ')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.render('register', { errors: errors.array() });
    // return res.status(422).render('register',{errors: errors.array()});
    next();
  },
];
