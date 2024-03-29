import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Make sure this import is correct
import { AppComponent } from './app.component';
// Import all your components
import { HomeComponent } from './home/home.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ShopComponent } from './shop/shop.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterArtisanComponent } from './register-artisan/register-artisan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtisanComponent,
    ShopComponent,
    WorkshopComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
