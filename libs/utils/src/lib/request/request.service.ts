import { singleton } from '../singleton';
import axios, { AxiosInstance } from 'axios';

class RequestServiceInner {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env['BASE_API_URL'],
      timeout: 5000,
    } as any);
  }

  public getAxiosInstance() {
    return this.axiosInstance;
  }

  public post<T, D>(url: string, data?: D, config?: any) {
    return this.axiosInstance.post<T, any, D>(url, data, config);
  }

  public get<T>(url: string, config?: any) {
    return this.axiosInstance.get<T, any>(url, config);
  }
}

export const RequestService = singleton(RequestServiceInner);
