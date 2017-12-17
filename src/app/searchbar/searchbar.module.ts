import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchService } from '../../services/search/search.service';

import { SearchbarComponent } from './searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchbarComponent
  ],
  exports: [
    SearchbarComponent
  ],
  providers: [
    SearchService
  ],
  bootstrap: [
    SearchbarComponent
  ]
})
export class SearchbarModule { }
