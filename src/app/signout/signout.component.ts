import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, 
    private router: Router,
    ) 
  {}

  ngOnInit(): void {
  }

  clicked()
  {
    console.log("button clicked");
    localStorage.removeItem("jwt");
    this.router.navigateByUrl('/signin');
  }

}
