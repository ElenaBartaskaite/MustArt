import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqComponent } from './faq.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FaqComponent
  ],
  exports: [
    FaqComponent
  ],
  bootstrap: [
    FaqComponent
  ]
})
export class FaqModule { }
