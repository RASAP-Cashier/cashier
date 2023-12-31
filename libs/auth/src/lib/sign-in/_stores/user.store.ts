import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from '.';
import { fetchCurrentUser } from '../api/user';

export enum UserRoles {
  Admin = 'admin',
  User = 'user',
}

export type UserType = {
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

export class UserStore {
  private currentUser: UserType = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    photo: '',
    isActive: true,
  };

  public get user() {
    return this.currentUser;
  }

  constructor(private rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  public async getUser() {
    try {
      runInAction(async () => {
        const userResponse = await fetchCurrentUser();
        this.currentUser = userResponse.data;
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  public clearUser() {
    this.currentUser.id = 0;
  }
}
