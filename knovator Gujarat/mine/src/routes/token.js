import jsonwebtoken from 'jsonwebtoken';

export const generate = (id) =>
  jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '90d',
  });
