import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerosLayoutComponent } from './heros-layout/heros-layout.component';
import { HerosListComponent } from './heros-list/heros-list.component';

const routes: Routes = [
  {
    path: '',
    component: HerosLayoutComponent,
    children: [
      { path: '', component: HerosListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule {}
