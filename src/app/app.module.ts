import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { SignoutComponent } from './signout/signout.component';
import { HomeComponent } from './home/home.component';
import { MailsComponent } from './mails/mails.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    HomeComponent,
    MailsComponent,
    AdminComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' ,component: AuthComponent },
      {path: 'signup' ,component: SignupComponent },
      {path: 'signin' ,component: SigninComponent },
      {path: 'home' , component: HomeComponent },
      {path: 'admin' , component: AdminComponent },
      {path: 'card/:card_id' , component: CardComponent },

    ]),
    BrowserAnimationsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
