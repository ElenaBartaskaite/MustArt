import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
