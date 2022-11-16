import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/dtos/equipment.dto';
import { Test } from 'src/app/dtos/test.dto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {

  @Input() statistics: Equipment[];

  constructor() { }

  ngOnInit() {}

  getTotals(equipment: Equipment): Test {
    return equipment
      .tests
      .reduce(
        (prev, current) => ({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          failed_attempts: prev.failed_attempts + current.failed_attempts,
          attempts: prev.attempts + current.attempts,
        })
      );
  }

}
