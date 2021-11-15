import { AxiosResponse } from "axios";

export interface IndexProps {
  trending: AxiosResponse<any, any>;
  popular: AxiosResponse<any, any>;
  favorites: AxiosResponse<any, any>;
  upcoming: AxiosResponse<any, any>;
  current: AxiosResponse<any, any>;
}

export interface AxiosResponseProps {}
export interface DetailsProps {
  reviewsRes: AxiosResponse<any, any>;
  detailsRes: AxiosResponse<any, any>;
}
export interface SubtypeProps {
  result: AxiosResponse<any, any>;
  genre?: string;
}

export interface KitsuProps {
  result: AxiosResponse<any, any>;
}
