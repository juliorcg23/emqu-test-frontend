import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    canActivate: [
      AuthGuard,
    ],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then( m => m.DashboardPageModule),
      },
      {
        path: 'equipment',
        loadChildren: () => import('./../equipment/equipment.module').then( m => m.EquipmentPageModule)
      },
      {
        path: 'test',
        loadChildren: () => import('./../test/test.module').then( m => m.TestPageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
