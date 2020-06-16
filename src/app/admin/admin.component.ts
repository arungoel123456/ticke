import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  list: any;
  list2: any;
  adminForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  flag : boolean = false ;

  constructor(private formBuilder : FormBuilder ,
    private authenticationService: AuthenticationService , 
    )
  {}

  modify(card, user)
  {
    this.authenticationService.assign(card,user).subscribe( (data) =>{
      console.log(data);

      this.authenticationService.getMails().subscribe( (data) =>{
        this.list = data ;
      } );
    });
  }

  ngOnInit(): void {
    this.authenticationService.generate().subscribe( (data) => {
      console.log(data);  

      this.authenticationService.getMails().subscribe( (data) =>{
        console.log(data);
        this.list=data;
      });
  
      this.authenticationService.getUsers().subscribe( (data) =>{
        console.log(data);

        this.list2=data;  
      });    
    });
  }

  get_assigned()
  {
    this.authenticationService.getMailsAssigned().subscribe( (data) => {
      console.log(data);
      this.list= data;
      this.flag= true;
    } );
  }

  get_not_assigned()
  {
    this.authenticationService.getMails().subscribe( (data) => {
      console.log(data);
      this.list= data;
      this.flag= false;
    } );

  }


}
