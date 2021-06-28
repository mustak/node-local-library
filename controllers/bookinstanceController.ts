import express, { Request, Response, NextFunction } from 'express';

import BookInstance, { BookInstanceStatus } from '../models/bookinstance';

// Display list of all BookInstances.
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

// Display detail page for a specific BookInstance.
export const bookinstance_detail = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
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
