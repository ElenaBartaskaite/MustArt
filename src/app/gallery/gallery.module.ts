import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgbModule,
    NgDatepickerModule,
    NgxMasonryModule
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
