import express from 'express';

import * as genre_ctl from '../controllers/genreController';

const router = express.Router();

// Default /book route
router.get('/', function (req, res, next) {
    res.redirect('/catalog/genres');
});

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/create', genre_ctl.genre_create_get);

//POST request for creating Genre.
router.post('/create', genre_ctl.genre_create_post);

// GET request to delete Genre.
router.get('/:id/delete', genre_ctl.genre_delete_get);

// POST request to delete Genre.
router.post('/:id/delete', genre_ctl.genre_delete_post);

// GET request to update Genre.
router.get('/:id/update', genre_ctl.genre_update_get);

// POST request to update Genre.
router.post('/:id/update', genre_ctl.genre_update_post);

// GET request for one Genre.
router.get('/:id', genre_ctl.genre_detail);

export default router;
