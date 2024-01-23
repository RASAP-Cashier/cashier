import { AuthRoutes } from './cs';
import { singleton, RequestService } from '@cashier/utils';
import { AuthClientRoutes } from './auth.client-routes';

class AuthServiceInner {
  private readonly tokenKey = 'auth-token';

  constructor() {
    RequestService.getInstance().getAxiosInstance().interceptors.request.use(
      config => {
        if (this.getToken()) {
          config.headers.Authorization = `Bearer ${this.getToken()}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    RequestService.getInstance().getAxiosInstance().interceptors.response.use(
      response => {
        console.log(response, 'REsponse');
        if (response.status !== 200) {
          //error
          return Promise.reject(response.data.message);
        }
        else {
          return response;
        }
      },
      error => {
        console.log('Debug', error.response.data.statusCode);
        if (error.response.data.statusCode === 401) {
          this.removeToken();
          window.location.href = `/${AuthClientRoutes.SignIn}`;
        }
        return Promise.reject('error');
      },
    );
  }

  private getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string) {
    return localStorage.setItem(this.tokenKey, token);
  }

  private removeToken() {
    return localStorage.removeItem(this.tokenKey);
  }

  public get isAuth() {
    return !!this.getToken();
  }

  public async signIn(data: any): Promise<string> {
    const response = await RequestService.getInstance().getAxiosInstance()({
      url: AuthRoutes.SignIn,
      method: 'post',
      data,
    });

    this.setToken(response.data.access_token);

    return this.getToken();
  }

  public signOut() {
    this.removeToken();
  }
}

export const AuthService = singleton(AuthServiceInner);
