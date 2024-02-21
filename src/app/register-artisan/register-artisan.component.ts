import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-artisan',
  templateUrl: './register-artisan.component.html',
  styleUrls: ['./register-artisan.component.css']
})
export class RegisterArtisanComponent {
  constructor(private router: Router) {}

  signup() {
    // Placeholder for signup logic, replace with actual signup logic

    // After successful signup, navigate to the desired page (e.g., dashboard)
    this.router.navigate(['']);
  }
}
