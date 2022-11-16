import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/dtos/equipment.dto';

@Component({
  selector: 'app-equipment-comparison',
  templateUrl: './equipment-comparison.component.html',
  styleUrls: ['./equipment-comparison.component.scss'],
})
export class EquipmentComparisonComponent implements OnInit {

  @Input() haveErrors: Equipment[];
  @Input() doNotHaveErrors: Equipment[];

  constructor() { }

  ngOnInit() {}

}
