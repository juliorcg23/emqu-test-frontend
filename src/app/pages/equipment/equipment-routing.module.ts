import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentDetailResolverService } from 'src/app/resolvers/equipment-detail-resolver.service';

import { EquipmentPage } from './equipment.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: ':id/detail',
    resolve: {
      equipment: EquipmentDetailResolverService,
    },
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentPageRoutingModule {}
