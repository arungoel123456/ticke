import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userDetails: any;
  userJWT: any;
  signupForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    password_confirmation: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService, 
    private router : Router,
  ) 
  {}


  onSubmit()
  {
    const formValue = this.signupForm.value;
    this.authenticationService.createUser(formValue).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/home');
    });
  }

  signin()
  {
    this.router.navigateByUrl('/signin');
  }

  ngOnInit(): void {
  }


}
