import { AxiosResponse } from "axios";

export interface IndexProps {
  trending: AxiosResponse<any, any>;
  popular: AxiosResponse<any, any>;
  favorites: AxiosResponse<any, any>;
  upcoming: AxiosResponse<any, any>;
  current: AxiosResponse<any, any>;
}
