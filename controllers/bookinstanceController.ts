import express, { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

import BookInstance, { BookInstanceStatus } from '../models/bookinstance';

/**
 * Display list of all BookInstances.
 * @param {Request} req - express Request Object
 * @param {Response} res - express Response Object
 * @param {NextFunction} next - express Next object
 */
export const bookinstance_list = function (req: Request, res: Response, next: NextFunction) {
    BookInstance.find()
        .populate('book')
        .exec(function (error, BIlist) {
            if (error) {
                return next(error);
            }
            res.render('bookinstance/bookinstance_list', {
                title: 'Book Instance List',
                list: BIlist,
                status: BookInstanceStatus,
            });
        });
};

/**
 * Display detail page for a specific BookInstance.
 * @param {Request} req - express Request Object
 * @param {Response} res - express Response Object
 * @param {NextFunction} next - express Next object
 */
export const bookinstance_detail = function (req: Request, res: Response, next: NextFunction) {
    const biID = req.params.id;

    BookInstance.findById(biID)
        .populate('book')
        .exec(function (err, bookinstance) {
            if (err) {
                return next(err);
            }
            if (bookinstance == null) {
                const err = new HttpError('Book copy not found.');
                err.status = 404;
                return next(err);
            }

            res.render('bookinstance/bookinstance_details', {
                title: `Copy: ${bookinstance.book.title}`,
                bookinstance,
            });
        });
};

// Display BookInstance create form on GET.
export const bookinstance_create_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
export const bookinstance_create_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
export const bookinstance_delete_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
export const bookinstance_delete_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
export const bookinstance_update_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Display BookInstance update form on POST.
export const bookinstance_update_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};
