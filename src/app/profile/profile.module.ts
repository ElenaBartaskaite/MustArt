import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileComponent
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  bootstrap: [
    ProfileComponent
  ]
})
export class ProfileModule { }
