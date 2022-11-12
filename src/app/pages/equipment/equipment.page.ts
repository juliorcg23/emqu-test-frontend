import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/dtos/equipment.dto';
import { EquipmentService } from 'src/app/services/equipment.service';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {

  equipmentRows: Equipment[] = [];
  readonly selectionType = SelectionType;
  equipmentSelected: Equipment[];

  constructor(
    private equipmentService: EquipmentService
  ) { }

  ngOnInit() {
    this.getEquipmentList();
  }

  async getEquipmentList() {
    this.equipmentRows = await this.equipmentService.getEquipmentList();
  }

  detail(row) {
    console.log(row);
  }

}
