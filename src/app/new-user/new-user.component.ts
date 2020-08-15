import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      username: '',
      password: '',
      email: ''
      
    });

  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      1,
      formValue['username'],
      formValue['email'],
      formValue['password']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

}