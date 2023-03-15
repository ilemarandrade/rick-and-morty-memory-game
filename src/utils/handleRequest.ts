import { AxiosRequestConfig, Method } from "axios";
import axiosInstance from "./axiosInstance";

interface IhandleRequest {
  method: Method;
  url: string;
  config?: AxiosRequestConfig;
  onSuccess: (res: unknown) => void;
  onError: (res: unknown) => void;
}
const handleRequest = ({
  method,
  url,
  config,
  onSuccess,
  onError,
}: IhandleRequest) => {
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
