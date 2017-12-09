import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    NgbModule
  ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ],
  bootstrap: [
    GalleryComponent
  ]
})
export class GalleryModule { }
