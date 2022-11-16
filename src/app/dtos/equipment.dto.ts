import { BaseResponse } from './response.dto';
import { Test } from './test.dto';

/* eslint-disable @typescript-eslint/naming-convention */
export type Equipment = {
  id?: number;
  name?: string;
  ip?: string;
  user_id?: number;
  failed_tests?: number;
  done_tests?: number;
  tests?: Test[];
};

export interface EquipmentResponse extends BaseResponse {
  data: Equipment[];
};

export interface EquipmentDetailResponse extends BaseResponse {
  data: Equipment;
};

export interface CreateEquipmentResponse extends BaseResponse {
  data: Equipment;
};
