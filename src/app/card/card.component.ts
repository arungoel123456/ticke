import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder , Validators } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  [x: string]: any;

  card: any;
  card_id: any;
  user_id: any;
  comment_list: any;
  commentForm = this.formBuilder.group({
    comment: ['', Validators.required],
  });
  constructor(private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder , 
    private router: Router,
    ) 
  {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.card_id= params.get('card_id');
      console.log(this.card_id);
      this.authenticationService.show(this.card_id).subscribe( (data) => {
        console.log(data);
        this.user_id= data["user_id"];
        console.log(this.user_id);
      });

      this.authenticationService.getAllComments(this.card_id).subscribe( (data) => {
        console.log(data);
        this.comment_list= data;
      });
    })
  }

  onSubmit()
  {
    const commentValue = this.commentForm.get('comment').value;
    console.log(commentValue);
    this.authenticationService.add_comment(commentValue, this.user_id, this.card_id).subscribe( (data) =>{
      console.log(data);
      this.comment_list= data;
      this.commentForm = this.formBuilder.group({
        comment: ['', Validators.required],
      });
    });

  }

  clicked()
  {
    console.log("button clicked");
    localStorage.removeItem("jwt");
    this.router.navigateByUrl('/signin');
  }

  deleteComment(comment_id)
  {
    this.authenticationService.deleteComment(comment_id).subscribe( (data) => {
      this.comment_list=data;
      console.log(data);
    });
  }

}
