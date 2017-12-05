import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchbarModule } from './searchbar/searchbar.module';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { GalleryModule } from './gallery/gallery.module';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
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
