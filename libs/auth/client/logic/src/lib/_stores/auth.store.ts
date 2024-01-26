import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';
import { AuthService } from '../auth.service';

export class AuthStore {
  constructor(private readonly rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  public get isAuth() {
    return AuthService.getInstance().isAuth;
  }

  public async signIn(authDto: any) {
    try {
      return await AuthService.getInstance().signIn(authDto);
    } catch (error) {
      // TODO implement
    }
  }

  public signOut() {
    AuthService.getInstance().signOut();

    this.rootStore.userStore.clearUser();
  }
}
