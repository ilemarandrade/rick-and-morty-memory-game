import { AxiosRequestConfig, Method } from "axios";
import axiosInstance from "./axiosInstance";
interface IhandleRequest<T> {
  method: Method;
  url: string;
  config?: AxiosRequestConfig;
  onSuccess: (res: { data: T }) => void;
  onError: (res: { data: T }) => void;
}

const handleRequest = <T>({
  method,
  url,
  config,
  onSuccess,
  onError,
}: IhandleRequest<T>) => {
  axiosInstance({
    method,
    url,
    ...config,
  })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onError(err);
    });
};

export default handleRequest;
