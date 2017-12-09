import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { SearchbarModule } from './searchbar/searchbar.module';

import { AboutComponent } from './about/about.component';

import { CartComponent } from './cart/cart.component';

import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from './gallery/gallery.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot(),
    PageNotFoundModule,
    GalleryModule,
    NavbarModule,
    SearchbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
