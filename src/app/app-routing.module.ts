import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ShopComponent } from './shop/shop.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import {RegisterUserComponent} from "./register-user/register-user.component";
import {RegisterArtisanComponent} from "./register-artisan/register-artisan.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisan', component: ArtisanComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'register-artisan', component: RegisterArtisanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
