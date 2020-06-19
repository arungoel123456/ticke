# Ticket System

### About app:

This is the frontend framework for an application “Ticket System”. In this I have tried making the frontend for this app whose backend is written in rails platform in ruby language. It fetches email from the GMAIL with a particular subject , in this it is “ app subject”  and makes a card for that email. There are many users, and admin. Admin can assign that card to any of the user. 


### Getting Started:
1. Clone this application.
2. Install all the dependencies.
3. Start the server using command ‘ng serve’ .
4. Open browser and open localhost:4200 .

### Explanation:

##### There are many components:

1. Auth: This component renders the first page i.e. the root page of the app.
2. Signin: This component shows the signin form and allows the user to signin.
3. SignUp: This component shows the signup form and allows user to signup.
4. Home component: This component displays two component. First is the signout . Second is if the user is admin, then it displays admin component and if the user is not admin, then it displays mails component which are explained below.
5. Signout: This component helps the user to signout.
6. Mails component: This component displays the cards that are assigned to that user by the admin.
7. Admin: This component offers two options- In first option it can show all the cards that are assigned different user. The admin can see which card is allocated to which user.
Second option shows the list of all the unassigned cards and shows a list of users and allows us to assign that card to any of the user.


##### Services:

Authentication Service: Any authentication service with few basic methods for allowing users to log in and log out. It also include a method for retrieving a JSON Web Token from wherever it is stored on the client and a way to determine if the user is authenticated or not.

### Future Work:
1. Applying search bar for searching emails .
2. Making a dashboard for admin which contains all the assigned mails as well as unassigned mails.
3. Making a dropdown for selecting a user and showing its assigned cards to admin.
