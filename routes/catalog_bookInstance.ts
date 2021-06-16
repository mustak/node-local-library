import express from 'express';

import * as bookinstance_ctl from '../controllers/bookinstanceController';

const router = express.Router();

// Default /bookinstance route
router.get('/', function (req, res, next) {
    res.redirect('/catalog/bookinstances');
});

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/create', bookinstance_ctl.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/create', bookinstance_ctl.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/:id/delete', bookinstance_ctl.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/:id/delete', bookinstance_ctl.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/:id/update', bookinstance_ctl.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/:id/update', bookinstance_ctl.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/:id', bookinstance_ctl.bookinstance_detail);

export default router;