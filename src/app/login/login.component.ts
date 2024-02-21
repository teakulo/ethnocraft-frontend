import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    // Placeholder for signup logic, replace with actual signup logic

    // After successful signup, navigate to the desired page (e.g., dashboard)
    this.router.navigate(['']);
  }
}
