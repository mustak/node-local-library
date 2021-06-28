import { Model, Schema, Document, PopulatedDoc, model } from 'mongoose';

export interface IGenre {
    _id: string;
    name: string;
}

export interface IGenreModel extends Model<IGenre> {
    url: string;
}

const GenreSchema = new Schema<IGenre, IGenreModel>({
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

GenreSchema.virtual('url').get(function (this: IGenre) {
    return '/catalog/genre/' + this._id;
});

export const genreModelName = 'Genre';
export default model<IGenre, IGenreModel>(genreModelName, GenreSchema);
