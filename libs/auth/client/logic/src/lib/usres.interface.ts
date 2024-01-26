export enum UserRoles {
  Admin = 'admin',
  User = 'user',
}

export type IUser = {
  confirmationHash?: string;
  email: string;
  firstName: string;
  id: number;
  isActive?: boolean;
  isEmailVerified?: boolean;
  lastName: string;
  photo?: string;
  roles?: UserRoles[];
};

export type IGetUserResponse = {
  data: IUser
}
