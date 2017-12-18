import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
