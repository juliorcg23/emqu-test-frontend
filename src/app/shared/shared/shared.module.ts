import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxDatatableModule,
  ],
  exports: [
    NgxDatatableModule,
  ]
})
export class SharedModule { }
