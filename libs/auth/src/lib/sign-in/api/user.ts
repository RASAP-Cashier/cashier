// import { apiService } from '@cashier/auth';

import { UserType } from '../_stores/user.store';

export async function fetchCurrentUser(): Promise<{
  data: UserType
}> {
  return Promise.resolve({
    data: {
      id: 1,
      firstName: 'Hochu',
      lastName: 'Deneg',
      email: 'ochenhochudeneg@mnogo.mne',
      photo: '',
      isActive: true,
    }
  });
  // return apiService({
  //   url: '/users',
  //   method: 'get',
  // });
};
