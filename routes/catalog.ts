import express from 'express';

import catalogBookRouter from './catalog_book';
import catalogAuthorRouter from './catalog_author';
import catalogGenreRouter from './catalog_genre';
import catalogBookinstanceRouter from './catalog_bookInstance';

const router = express.Router();

import * as book_ctl from '../controllers/bookController';
import * as author_ctl from '../controllers/authorController';
import * as genre_ctl from '../controllers/genreController';
import * as book_instance_ctl from '../controllers/bookinstanceController';

/*************************************
 * /catalog routes
 **********************/
// GET catalog home page.
router.get('/', book_ctl.index);

/*************************************
 * /catalog/book routes
 **********************/
router.use('/book', catalogBookRouter);
// GET request for list of all Book items.
router.get('/books', book_ctl.book_list);

/*************************************
 * /catalog/author routes
 ************************/
router.use('/author', catalogAuthorRouter);
// GET request for list of all Authors.
router.get('/authors', author_ctl.author_list);

/*************************************
 * /catalog/genre routes
 ************************/
router.use('/genre', catalogGenreRouter);
// GET request for list of all Genre.
router.get('/genres', genre_ctl.genre_list);

/*************************************
 * /catalog/bookinstance routes
 ************************/
 router.use('/bookinstance', catalogBookinstanceRouter);
// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_ctl.bookinstance_list);

export default router;
