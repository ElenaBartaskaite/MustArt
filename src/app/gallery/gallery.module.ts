import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { NavbarModule } from './../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule
  ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
