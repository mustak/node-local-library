import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import nunjucks from 'nunjucks';
import mongoose from 'mongoose';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import catalogRouter from './routes/catalog';

const app = express();

/****************
 * Mongoose setup
 *****************/
mongoose
    .connect(process.env.DB_HOST!, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.error.bind(console, error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'njk');
nunjucks.configure('views', {
    express: app,
    watch: true,
    autoescape: true,
    trimBlocks: true,
    lstripBlocks: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err: HttpError, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // res.locals.error.test = 'mhy test';

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;
