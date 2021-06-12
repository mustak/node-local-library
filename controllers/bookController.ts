import express, { Request, Response, NextFunction } from 'express';

import Book from '../models/bookinstance';

export const index = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
export const book_list = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
export const book_detail = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
export const book_create_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
export const book_create_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
export const book_delete_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
export const book_delete_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
export const book_update_get = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
export const book_update_post = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
