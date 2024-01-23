import { singleton } from '../singleton';
import axios from 'axios';

class RequestServiceInner {
  private readonly axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.BASE_API_URL,
      timeout: 5000,
    } as any);
  }

  public getAxiosInstance() {
    return this.axiosInstance;
  }
}

export const RequestService = singleton(RequestServiceInner);
