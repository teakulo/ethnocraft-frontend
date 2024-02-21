import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ethnocraft-frontend';
  showNav: boolean = true;

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/login'
        this.showNav = !['/login', '/register-user', '/register-artisan'].includes(event.url);
      }
    });
  }
}
