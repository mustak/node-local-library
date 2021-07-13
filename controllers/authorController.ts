import express, { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import Author from '../models/author';
import async from 'async';

import Book from '../models/book';

/**
 * Display list of all Authors.
 * @param {Request} req - express Request Object
 * @param {Response} res - express Response Object
 * @param {NextFunction} next - express Next object
 */
export const author_list = function (req: Request, res: Response, next: NextFunction) {
    Author.find()
        .sort({ family_name: 1 })
        .exec(function (err, list_authors) {
            if (err) {
                return next(err);
            }
            res.render('author/author_list', { title: 'Author List', author_list: list_authors });
        });
    // res.send('NOT IMPLEMENTED: Author list');
};

/**
 * Display detail page for a specific Author.
 * @param {Request} req - express Request Object
 * @param {Response} res - express Response Object
 * @param {NextFunction} next - express Next object
 */
export const author_detail = function (req: Request, res: Response, next: NextFunction) {
    const authorID = req.params.id;

    async.parallel(
        {
            author: function (callback) {
                Author.findById(authorID).exec(callback);
            },
            author_books: function (callback) {
                Book.find({ author: authorID }).select('title summary').exec(callback);
            },
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.author == null) {
                const err = new HttpError('Author not found');
                err.status = 404;
                return next(err);
            }

            res.render('author/author_detail', {
                title: 'Author Details',
                author: results.author,
                books: results.author_books,
            });
        },
    );
};

// Display Author create form on GET.
export const author_create_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
export const author_create_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
export const author_delete_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
export const author_delete_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
export const author_update_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
export const author_update_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
