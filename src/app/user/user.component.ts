import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user_id: any;
  user_data: any;
  
  constructor(private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) 
  { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.user_id= params.get('user_id');
      console.log(this.user_id);
      this.authenticationService.userShow(this.user_id).subscribe( (data) => {
        console.log(data);
        this.user_data= data;
      });

    });

  }

}
