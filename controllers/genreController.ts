import express, { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import async from 'async';

import Genre from '../models/genre';
import Book from '../models/book';

/**
 * Display list of all BookInstances.
 *
 * @param req
 * @param res
 * @param next
 */
export const genre_list = function (req: Request, res: Response, next: NextFunction) {
    Genre.find()
        .sort({ name: 1 })
        .exec(function (err, list_genres) {
            if (err) {
                return next(err);
            }

            res.render('genre/genre_list', { title: 'Genre List', genre_list: list_genres });
        });
};

/**
 * Display detail page for a specific Genre.
 *
 * @param req
 * @param res
 * @param next
 */
export const genre_detail = function (req: Request, res: Response, next: NextFunction) {
    const genreID = req.params.id;
    async.parallel(
        {
            genre: function (callback) {
                Genre.findById(genreID).exec(callback);
            },
            genre_books: function (callback) {
                Book.find({ genre: genreID }).exec(callback);
            },
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.genre == null) {
                // No results.
                let err = new HttpError('Genre not found');
                err.status = 404;
                return next(err);
            }

            res.render('genre/genre_details', {
                title: 'Genre Details',
                genre: results.genre,
                books: results.genre_books,
            });
        },
    );
    // res.send('NOT IMPLEMENTED: Genre detail: ' + genreID);
};

// Display Genre create form on GET.
export const genre_create_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
export const genre_create_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
export const genre_delete_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
export const genre_delete_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
export const genre_update_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
export const genre_update_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};
