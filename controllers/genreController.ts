import express, { Request, Response, NextFunction } from 'express';

import Genre from '../models/genre';

// Display list of all BookInstances.
export const genre_list = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre list');
};

// Display detail page for a specific Genre.
export const genre_detail = function (req: Request, res: Response) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
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
