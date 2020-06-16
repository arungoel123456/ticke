# Ticke

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Ticket System

About app:
This is the frontend framework for an application “Ticket System”. In this I have tried making the frontend for this app whose backend is written in rails platform in ruby language. It fetches email from the GMAIL with a particular subject , in this it is “ app subject”  and makes a card for that email. There are many users, and admin. Admin can assign that card to any of the user. 


Getting Started:
Clone this application.
Install all the dependencies.
Start the server using command ‘ng serve’ .
Open browser and open localhost:4200 .

Explanation:

There are many components:

Auth: This component renders the first page i.e. the root page of the app.
Signin: This component shows the signin form and allows the user to signin.
SignUp: This component shows the signup form and allows user to signup.
Home component: This component displays two component. First is the signout . Second is if the user is admin, then it displays admin component and if the user is not admin, then it displays mails component which are explained below.
Signout: This component helps the user to signout.
Mails component: This component displays the cards that are assigned to that user by the admin.
Admin: This component offers two options- In first option it can show all the cards that are assigned different user. The admin can see which card is allocated to which user.
Second option shows the list of all the unassigned cards and shows a list of users and allows us to assign that card to any of the user.


Services:

Authentication Service: Any authentication service with few basic methods for allowing users to log in and log out. It also include a method for retrieving a JSON Web Token from wherever it is stored on the client and a way to determine if the user is authenticated or not.
Future Work:
Applying search bar for searching emails .
Making a dashboard for admin which contains all the assigned mails as well as unassigned mails.



