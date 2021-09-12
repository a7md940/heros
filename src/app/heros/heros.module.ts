import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HerosLayoutComponent } from './heros-layout/heros-layout.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { HerosRoutingModule } from './heros-routing.module';
import { FormControlsModule } from '../form-controls/form-controls.module';

@NgModule({
  declarations: [
    HerosLayoutComponent,
    HerosListComponent,
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    FormControlsModule,
    ReactiveFormsModule
  ]
})
export class HerosModule {}
