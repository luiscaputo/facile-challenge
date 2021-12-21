export interface AppResponse<Data> {
  code?: string;
  success: boolean;
  message?: string;
  data?: object | string;
}
