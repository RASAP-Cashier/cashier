import { RequestService, singleton } from '@cashier/utils';
import { AuthRoutes } from './cs';
import { IUser } from './usres.interface';

class UsersServiceInner {
  public async getCurrentUser(): Promise<IUser> {
    // return Promise.resolve({
    //   data: {
    //     id: 1,
    //     firstName: 'Hochu',
    //     lastName: 'Deneg',
    //     email: 'ochenhochudeneg@mnogo.mne',
    //     photo: '',
    //     isActive: true,
    //   }
    // });
    const response = await RequestService.getInstance().getAxiosInstance()({
      url: AuthRoutes.Users,
      method: 'get',
    });

    return response.data;
  };
}

export const UsersService = singleton(UsersServiceInner);
