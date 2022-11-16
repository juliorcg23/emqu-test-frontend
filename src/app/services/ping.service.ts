/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { PingResponse } from '../dtos/ping-response.dto';
import { HttpService } from './http.service';
import { ping, IPingResult, IPingOptions } from '@network-utils/tcp-ping';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(
    private http: HttpService,
  ) { }

  async ping(
    options: IPingOptions,
    update?: (progress: number, total: number) => void,
  ): Promise<PingResponse> {
    try {
      const pingResult: IPingResult = await ping({
        ...options
      }, update);

      return {
        average_latency: pingResult.averageLatency,
        maximum_latency: pingResult.maximumLatency,
        minimum_latency: pingResult.minimumLatency,
        failed_attempts: pingResult.errors.length,
        successful: true,
      };
    }
    catch (ex) {
      console.log(ex);
      return {
        average_latency: 0,
        maximum_latency: 0,
        minimum_latency: 0,
        failed_attempts: 0,
        successful: false,
      };
    }
  }
}
