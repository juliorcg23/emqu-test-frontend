import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  testRows = [];

  constructor(
    private testService: TestsService,
  ) { }

  ngOnInit() {
    this.getEquipmentList();
  }

  async getEquipmentList() {
    this.testRows = await this.testService.getTestList();
  }


  detail(row) {}

}
