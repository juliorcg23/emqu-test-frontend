import { Injectable } from '@angular/core';
import { StatisticsResponse } from '../dtos/statistics.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpService: HttpService
  ) { }

  async getStatistics(): Promise<StatisticsResponse> {
    return await this.httpService.get<StatisticsResponse>('dashboard');
  }
}
