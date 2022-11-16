/* eslint-disable @typescript-eslint/naming-convention */
import { Equipment } from './equipment.dto';
import { BaseResponse } from './response.dto';

export interface Test {
  id?: number;
  equipment?: Equipment;
  average_latency?: number;
  maximum_latency?: number;
  minimum_latency?: number;
  failed_attempts?: number;
  successful?: boolean;
  attempts?: number;
};

export interface TestResponse extends BaseResponse {
  data: Test[];
}

export interface CreateTestResponse extends BaseResponse {
  data: Test;
}
