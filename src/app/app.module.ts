import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ShopComponent } from './shop/shop.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtisanComponent,
    ShopComponent,
    WorkshopComponent,
    AboutUsComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
