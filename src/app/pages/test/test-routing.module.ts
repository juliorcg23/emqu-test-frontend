import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDetailResolverService } from 'src/app/resolvers/test-detail-resolver.service';

import { TestPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    component: TestPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: ':id/detail',
    resolve: {
      test: TestDetailResolverService,
    },
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPageRoutingModule {}
