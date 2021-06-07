import { Model, Schema, Document, PopulatedDoc, model } from 'mongoose';
// Schema, model, Document, PopulatedDoc

import { authorModelName, IAuthorModel } from './author';
import { genreModelName, IGenreModel } from './genre';

export interface IBook {
    title: string;
    author: PopulatedDoc<IAuthorModel & Document>;
    summary: string;
    isbn: string;
    genre: PopulatedDoc<IGenreModel & Document>;
}

export interface IBookModel extends Model<IBook> {
    url: string;
}

const BookSchema = new Schema<IBook, IBookModel>({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: authorModelName, required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: genreModelName }],
});

BookSchema.virtual('url').get(function (this: any) {
    return '/catalog/book/' + this._id;
});

export const bookModelName = 'Book';

export default model<IBook, IBookModel>(bookModelName, BookSchema);
