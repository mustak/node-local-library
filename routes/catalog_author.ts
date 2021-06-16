import express from 'express';

import * as author_ctl from '../controllers/authorController';

const router = express.Router();

// Default /author route
router.get('/', function (req, res, next) {
    res.redirect('/catalog/authors');
});

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/create', author_ctl.author_create_get);

// POST request for creating Author.
router.post('/create', author_ctl.author_create_post);

// GET request to delete Author.
router.get('/:id/delete', author_ctl.author_delete_get);

// POST request to delete Author.
router.post('/:id/delete', author_ctl.author_delete_post);

// GET request to update Author.
router.get('/:id/update', author_ctl.author_update_get);

// POST request to update Author.
router.post('/:id/update', author_ctl.author_update_post);

// GET request for one Author.
router.get('/:id', author_ctl.author_detail);

export default router;
