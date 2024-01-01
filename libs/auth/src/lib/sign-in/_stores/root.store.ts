import { AuthStore } from './auth.store';
import { UserStore } from './user.store';

export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
  }
}
