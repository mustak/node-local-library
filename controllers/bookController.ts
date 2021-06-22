import express, { Request, Response, NextFunction } from 'express';
import async from 'async';

import Book from '../models/book';
import Author from '../models/author';
import Genre from '../models/genre';
import BookInstance, { BookInstanceStatus } from '../models/bookinstance';

export const index = function (req: Request, res: Response) {
    async.parallel(
        {
            book_count: function (callback) {
                Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
            },
            book_instance_count: function (callback) {
                BookInstance.countDocuments({}, callback);
            },
            book_instance_available_count: function (callback) {
                BookInstance.countDocuments({ status: BookInstanceStatus.Available }, callback);
            },
            author_count: function (callback) {
                Author.countDocuments({}, callback);
            },
            genre_count: function (callback) {
                Genre.countDocuments({}, callback);
            },
        },
        function (err, results) {
            console.log(err);
            res.render('catalog/index', { title: 'Local Library Home', error: err, data: results });
        },
    );
};

// Display list of all books.
export const book_list = function (req: Request, res: Response, next: NextFunction) {
    Book.find({})
        .select('title author')
        .sort({ title: 1 })
        .populate('author')
        .exec((err, list_books) => {
            if (err) {
                return next(err);
            }
            res.render('book/book_list', { title: 'Book List', book_list: list_books });
        });
    // res.send('NOT IMPLEMENTED: Book list');
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
