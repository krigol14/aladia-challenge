import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { ICreateUser, IUser } from '@aladia/common';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: ICreateUser): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    const savedUser = await createdUser.save();
    return this.toIUser(savedUser);
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.userModel.find().exec();
    return users.map((user) => this.toIUser(user));
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.userModel.findOne({ email }).exec();
    return user ? this.toIUser(user) : null;
  }

  async findByEmailWithPassword(email: string): Promise<UserDocument | null> {
    return await this.userModel.findOne({ email }).select('+password').exec();
  }

  toIUser(user: UserDocument): IUser {
    return {
      id: user.id as string,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
