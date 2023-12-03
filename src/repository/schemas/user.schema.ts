/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { GenderEnum, PermissionEnum, RoleEnum } from './../../common';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ trim: true, unique: true })
  username: string;

  @Prop({ trim: true, select: false })
  password: string;

  @Prop({ trim: true })
  firstName: string;

  @Prop({ trim: true })
  lastName: string;

  @Prop({ trim: true, unique: true })
  mobile: string;

  @Prop({ trim: true, unique: true })
  email: string;

  @Prop({ trim: true })
  nid: string;

  @Prop({ trim: true })
  address: string;

  @Prop({
    type: String,
    enum: RoleEnum,
    required: true,
    uppercase: true,
    trim: true,
  })
  role: RoleEnum;

  @Prop({
    type: String,
    enum: GenderEnum,
    required: true,
    uppercase: true,
    trim: true,
  })
  gender: GenderEnum;

  @Prop({
    type: [String],
    enum: PermissionEnum,
    required: true,
    uppercase: true,
    trim: true,
  })
  permissions: PermissionEnum[];

  @Prop({ default: true })
  status: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', function (next: Function) {
  const user = this;
  if (user.password) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
      });
    });
  }
});
