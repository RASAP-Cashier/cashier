import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from '.';
import { IUser } from '../../usres.interface';
import { UsersService } from '../../users.service';

export class UserStore {
  private currentUser: IUser = {
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

  public async getUser(): Promise<boolean> {
    try {
      runInAction(async () => {
        this.currentUser = await UsersService.getInstance().getCurrentUser();
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
