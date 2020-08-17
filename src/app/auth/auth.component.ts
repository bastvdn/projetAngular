import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router){


  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const username = this.signupForm.get('username').value;

    this.authService.createNewUser(email, password, username).then(
      () => {
        this.router.navigate(['/articles']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}

