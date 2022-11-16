/* eslint-disable @typescript-eslint/naming-convention */
import { BaseResponse } from './response.dto';

export interface PingResponse {
  average_latency: number;
  maximum_latency: number;
  minimum_latency: number;
  failed_attempts: number;
  successful: boolean;
}
