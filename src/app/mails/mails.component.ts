import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {

  list: any;
  data: any;
  constructor(
    private authenticationService: AuthenticationService) 
  {}

  ngOnInit(): void {
    this.authenticationService.getMails().subscribe( (data) =>{
      console.log(data);
      this.list=data;
    } )
  }

  unassign(card)
  {
    this.authenticationService.unassign(card).subscribe( (data) => {
      console.log(data);
      this.list= data;
    });
  }

}
