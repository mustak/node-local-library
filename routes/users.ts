import express from 'express';
import mongoose from 'mongoose';
import Genre, { IGenre, IGenreModel } from '../models/genre';

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('users/index', { title: 'Users X' });
});

router.get('/cool', function (req, res, next) {
    console.log(process.env.DB_HOST);
    // mongoose.connect(process.env.DB_HOST!, { useNewUrlParser: true, useUnifiedTopology: true });
    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function () {
    //     const genre = new Genre({ name: 'Test Genre' });
    //     genre.save(function (err, result) {
    //         if (err) return console.error(err);
    //         console.log(result);
    //     });
    // });
    res.send(`You're so cool`);
});

router.get('/:userId/books/:bookId', function (req, res) {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    res.send({ query: req.query, params: req.params });
});

export default router;
