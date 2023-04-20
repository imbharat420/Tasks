import express from 'express';
import handleError from 'req-error';
import appMiddleware from './middlewares/app.middleware.js';
import officeRoute from './routes/office.routes.js';
import employeeRoute from './routes/employee.routes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
  try {
    const app = express();
    appMiddleware(app);
    // routes
    app.use('/api/v1', officeRoute);
    app.use('/api/v1', employeeRoute);

    await connectDB();

    app.listen(5000, () => {
      console.log(`listening:*5000`);
    });

    handleError(app);
  } catch (e) {}
};

main().catch((e) => console.error(e));
