export interface IUser {
  name: string;
  surname: string;
  birthDate: Date;
  email: string;
  role: Role;
}
export enum Role {
  User, Guest, Administrator, DBA
}
