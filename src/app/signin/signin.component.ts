import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userDetails: any;
  
  signinForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder , 
    private authenticationService: AuthenticationService , 
    private router: Router,
    )
  {}

  onSubmit()
  {
    const formValue = this.signinForm.value;
    this.authenticationService.getJWT(formValue).subscribe((data) => {
      console.log(data)
      localStorage.setItem("jwt" , data["jwt"]) 
      this.router.navigateByUrl('/home');
    });   
  }

  signup()
  {
    this.router.navigateByUrl('/signup');
  }

  ngOnInit(): void {
  }

}
