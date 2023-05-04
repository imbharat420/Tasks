// https://www.digitalocean.com/community/tutorials/react-react-select

import express from 'express';
import handleError from 'req-error';
import CategoryRoute from './routes/category.routes.js';
import connectDB from './config/db.js';
import errorHandler from './middlewares/errorHandler.middleware.js';

const main = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // routes
    app.use('/', CategoryRoute);

    await connectDB();

    app.use('*', (req, res) => {
      res.status(404).json({ error: 'Oops! wrong place' });
    });

    app.listen(3000, () => {
      console.log(`listening:*5000`);
    });

    app.use(errorHandler);
    handleError(app);
  } catch (e) {}
};

main().catch((e) => console.error(e));
