import { Model, Schema, Document, PopulatedDoc, model, Date } from 'mongoose';
import { DateTime } from 'luxon';

export interface IAuthor {
    first_name: string;
    family_name: string;
    date_of_birth?: Date;
    date_of_death?: Date;
}

export interface IAuthorModel extends Model<IAuthor> {
    name: string;
    lifespan: string;
    url: string;
}

const AuthorSchema = new Schema<IAuthor, IAuthorModel>({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
});

AuthorSchema.virtual('name').get(function (this: any) {
    return this.family_name + ', ' + this.first_name;
});

AuthorSchema.virtual('lifespan').get(function (this: any) {
    const deathdate = this.date_of_death ? DateTime.fromJSDate(this.date_of_death).year : '';

    const birthdate = this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).year : '';

    return `${birthdate} - ${deathdate}`;
    // return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

AuthorSchema.virtual('url').get(function (this: any) {
    return '/catalog/author/' + this._id;
});

export const authorModelName = 'Author';

export default model<IAuthor, IAuthorModel>(authorModelName, AuthorSchema);
