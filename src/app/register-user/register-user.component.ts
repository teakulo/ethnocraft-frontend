import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  constructor(private router: Router) {}

  signup() {
    // Placeholder for signup logic, replace with actual signup logic

    // After successful signup, navigate to the desired page (e.g., dashboard)
    this.router.navigate(['']);
  }
}
