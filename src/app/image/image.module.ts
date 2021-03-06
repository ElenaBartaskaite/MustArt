import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageComponent
  ],
  exports: [
    ImageComponent
  ],
  bootstrap: [
    ImageComponent
  ]
})
export class ImageModule { }
