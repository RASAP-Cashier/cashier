import { apiService } from '@cashier/auth';

export const auth = (data: any) => {
  return apiService({
    url: 'auth/login',
    method: 'post',
    data,
  });
};
