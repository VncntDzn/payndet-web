import { AxiosResponse } from "axios";

export interface KitsuAnimeProps {
  title: string;
  result: AxiosResponse<any, any>;
}

export interface AttributesProps {
  attributes: any;
  id: number;
}
