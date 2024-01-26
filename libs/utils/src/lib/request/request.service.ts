import { singleton } from '../singleton';
import axios from 'axios';

class RequestServiceInner {
  private readonly axiosInstance: axios.AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env['BASE_API_URL'],
      timeout: 5000,
    } as any);
  }

  public getAxiosInstance() {
    return this.axiosInstance;
  }

  public post<T, D>(url: string, data?: D, config?: axios.AxiosRequestConfig): Promise<axios.AxiosResponse<T>> {
    return this.axiosInstance.post<T, axios.AxiosResponse<T>, D>(url, config);
  }

  public get<T>(url: string, config?: axios.AxiosRequestConfig): Promise<axios.AxiosResponse<T>> {
    return this.axiosInstance.get<T, axios.AxiosResponse<T>>(url, config);
  }
}

export const RequestService = singleton(RequestServiceInner);
