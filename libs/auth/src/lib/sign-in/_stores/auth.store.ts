import { makeAutoObservable } from 'mobx';
import { RootStore } from '.';
import { getToken, removeToken, setToken } from '../utils/auth';
import { auth } from '../api';

export class AuthStore {
  accessToken = '';

  private rootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isAuth() {
    return getToken() ? true : false;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }
  async login(authDto: any) {
    try {
      const result = await auth(authDto);
      // // TODO temp for test
      // const result = {
      //   data: {
      //     access_token: 'qweqefknwovbnaeo'
      //   }
      // }
      this.setAccessToken(result.data.access_token);
      setToken(result.data.access_token);
      return result.data.access_token;
    } catch (error) { /* empty */ }
  }

  logout() {
    removeToken();
    this.rootStore.userStore.clearUser();
  }
}
