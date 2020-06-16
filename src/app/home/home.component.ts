import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag : boolean = false;
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
      this.authenticationService.admin_login().subscribe((data) => {
        console.log(data);
        if(data["status"] == 200)
        {
          this.flag = true; 
        }
        console.log(this.flag);
      });
  }

}
