import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComparisonComponent } from './equipment-comparison/equipment-comparison.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    EquipmentComparisonComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    EquipmentComparisonComponent,
    StatisticsComponent,
  ]
})
export class ComponentsModule { }
