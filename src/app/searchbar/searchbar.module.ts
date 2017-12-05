import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from './searchbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchbarComponent
  ],
  exports: [
    SearchbarComponent
  ],
  bootstrap: [
    SearchbarComponent
  ]
})
export class SearchbarModule { }
