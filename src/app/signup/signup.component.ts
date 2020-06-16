import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userDetails;
  signupForm;
  constructor(
    private formBuilder: FormBuilder,
  ) 
  {
    this.signupForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirm_password:''
    });

  }
  onSubmit(userDetails)
  {

  }

  ngOnInit(): void {
  }

}
