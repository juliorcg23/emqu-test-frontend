import { BaseResponse } from './response.dto';

export type Credentials = {
  email: string;
  password: string;
};

export interface AuthResponse extends BaseResponse {
  data: {
    token: string;
    email: string;
  };
};
