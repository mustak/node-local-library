import { Model, Schema, Document, PopulatedDoc, model } from 'mongoose';
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

export const bookInstanceModelName = 'BookInstance';
export default model<IBookInstance, IBookInstanceModel>(bookInstanceModelName, BookInstanceSchema);

// module.exports = mongoose.model(bookInstanceModelName, BookInstanceSchema);
