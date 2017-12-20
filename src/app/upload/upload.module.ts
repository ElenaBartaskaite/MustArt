import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './upload.component';

import { ColorPickerModule } from 'ngx-color-picker';

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
    UploadComponent
  ],
  exports: [
    UploadComponent
  ],
  bootstrap: [
    UploadComponent
  ]
})
export class UploadModule { }
