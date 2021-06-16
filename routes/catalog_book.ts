import express from 'express';

import * as book_ctl from '../controllers/bookController';

const router = express.Router();

// Default /book route
router.get('/', function (req, res, next) {
    res.redirect('/catalog/books');
});

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/create', book_ctl.book_create_get);

// POST request for creating Book.
router.post('/create', book_ctl.book_create_post);

// GET request to delete Book.
router.get('/:id/delete', book_ctl.book_delete_get);

// POST request to delete Book.
router.post('/:id/delete', book_ctl.book_delete_post);

// GET request to update Book.
router.get('/:id/update', book_ctl.book_update_get);

// POST request to update Book.
router.post('/:id/update', book_ctl.book_update_post);

// GET request for one Book.
router.get('/:id', book_ctl.book_detail);

export default router;
