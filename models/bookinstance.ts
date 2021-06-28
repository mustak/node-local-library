import { Model, Schema, Document, PopulatedDoc, model } from 'mongoose';
import { DateTime } from 'luxon';

import { IBookModel } from '../models/book';
import { IGenre } from './genre';

export enum BookInstanceStatus {
    'Available' = 'Available',
    'Maintenance' = 'Maintenance',
    'Loaned' = 'Loaned',
    'Reserved' = 'Reserved',
    'Unavailable' = 'Unavailable',
}

export interface IBookInstance {
    book: PopulatedDoc<IBookModel & Document>;
    imprint: string;
    status: BookInstanceStatus;
    due_back?: Date;
}

export interface IBookInstanceModel extends Model<IBookInstance> {
    url: string;
    due_back_formatted: string;
}

const BookInstanceSchema = new Schema<IBookInstance, IBookInstanceModel>({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: Object.values(BookInstanceStatus),
        default: BookInstanceStatus.Maintenance,
    },
    due_back: { type: Date, default: Date.now },
});

BookInstanceSchema.virtual('url').get(function (this: { _id: string }) {
    return '/catalog/bookinstance/' + this._id;
});

BookInstanceSchema.virtual('due_back_formatted').get(function (this: { due_back: Date }) {
    return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

export const bookInstanceModelName = 'BookInstance';
export default model<IBookInstance, IBookInstanceModel>(bookInstanceModelName, BookInstanceSchema);

// module.exports = mongoose.model(bookInstanceModelName, BookInstanceSchema);
