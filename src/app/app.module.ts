import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { SearchbarModule } from './searchbar/searchbar.module';

import { AboutComponent } from './about/about.component';

import { CartComponent } from './cart/cart.component';

import { FaqComponent } from './faq/faq.component';

import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from './gallery/gallery.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { ProfileComponent } from './profile/profile.component';
import { ImageComponent } from './image/image.component';

import { SearchService } from '../services/search/search.service';
import { ImageService } from '../services/image/image.service';
import { RoutingService } from '../services/routing/routing.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UploadComponent } from './upload/upload.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: 'image', component: ImageComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AboutComponent,
    FaqComponent,
    ProfileComponent,
    ImageComponent,
    UploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot(),
    PageNotFoundModule,
    GalleryModule,
    NavbarModule,
    SearchbarModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    ImageService,
    RoutingService,
    SearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
