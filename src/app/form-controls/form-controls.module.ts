import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { PairsTogglerComponent } from './pairs-toggler/pairs-toggler.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    PairsTogglerComponent,
    SearchInputComponent
  ],
  exports: [PairsTogglerComponent, SearchInputComponent]
})
export class FormControlsModule {}
