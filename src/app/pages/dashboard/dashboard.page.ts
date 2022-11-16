import { Component, OnInit } from '@angular/core';
import { Statistics } from 'src/app/dtos/statistics.dto';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  statistics: Statistics;

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.getStatistics();
  }

  async getStatistics() {
    const { data } = await this.dashboardService.getStatistics();
    this. statistics = data;
  }

}
