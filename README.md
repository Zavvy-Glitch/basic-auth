# basic-auth

Deployed to [Heroku](https://basic-auth-serv.herokuapp.com/)  
[Pull Requests](https://github.com/Zavvy-Glitch/basic-auth/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed)

## Usage:
  - In order to use this application, download the following dependencies:
      - base64
      - express
      - dotenv
      - sqlite3
      - supertest
      - jest
      - sequelize
      - cors
      - nodemon
  - Please create a .env file and ensure that an entry is created for NODE_ENV=test & NODE=production (this is if you plan on running it locally)

### As a user, I want to create a new account so that I may later login
  - Using a tool such as httpie, postman, or a web form:
    - Make a POST request to the/signup route with username and password
    - Your server should support both JSON and FORM data as input
    - On a successful account creation, return a 201 status with the user object in the body
    - On any error, trigger your error handler with an appropriate error
### As a user, I want to login to my account so that I may access protected information
  - Using a tool such as httpie, postman, or a web form:
    - Make a POST request to the /signin route
    - Send a basic authentication header with a properly encoded username and password combination
    - On a successful account login, return a 200 status with the user object in the body
    - On any error, trigger your error handler with the message “Invalid Login”
