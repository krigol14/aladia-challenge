export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICreateUser {
  email: string;
  name: string;
  password: string;
}
