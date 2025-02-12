- create a repository
- initialize the repository
- node_modules, package.json, pakckage_lock.json
- install express
- create a server
- listen to posrt 7777
- write request handlers for /test , /hello
- install nodemon and update the scripts in package.json
- what are dependencies
- what is the use of "-g" while pm install
- diff btw ^ and ~

- initialize git
- .gitignore
- create a repository in github
- push all code to repository
- play with routes and route extensions ex. /hello ,/hello/2, /, /xyz
- order of the rotes matters a lot
- install postman app and make a workspace/collection > test API call
- explore routing and use of ? , +, (), \* i the routes
- use of regex in routes /a/, /.\*fly$/
<!-- https://expressjs.com/en/guide/routing.html -->
- reading the query params in the routes
- reading the dynamic routes

- multiple route handlers - play with the code
- next()
- neaxt funciton and errors along with res.send()
- app.use("/route", rh1, rh2, rh3, rh4, rh5)
- app.use("/route", [rh1, rh2], rh3, rh4, rh5)
- app.use("/route", rh1, [rh2, rh3], rh4, rh5)

- middleware
- how expressjs basically handles requests behind the scenes
- APP.USE(),APP.ALL()
- https://expressjs.com/en/guide/routing.html
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes, except /user/login



- DATABASE
-- mongodb+srv://namastedev:namastedev123@namastenode.edk5r.mongodb.net/   

- create a freee cluster on momgodb official website (mongo atlas)
- install mongoose library
- connect your appplication to the database "connection-url"/devTinder
- call the connectDB  function and connect to database before starting application
- create a userSchema 
- create a user model
- create POST  /signup API to add data to database
- push some documents using API calls from postman
- error handling using try and catch 


- javascript OBJECT  vs JSON (DIFFERENCE)
- add the express.json middleware to the app 
- makr your signup API dynamic to recive data  from the end user 
- User.findOne() with duplicate email ids which object it returns .
- API - get user by email 
- API - Feed Api- GET /feed - get all the users from the database
- API - getuser  BY ID 
- API - delete a user API
- DIFF BTW PATCH AND PUT 
- API - TO UPDATE A USER 
- EXPLORE DOCUMENTATION FOR MODELS METHODS
- OPTION IN  A MODEL.FINDONEANDUPDATE METHOD
- API - UPDATES THE USER WITH EMAIL ID


- EXPLORE SCHEMATYPE OPTIONS FROM THE DOCUMENTATION
- add required, unique, lowercase, min, minLength, trim
- add default value 
- create e custom validator function for gender
- improve the db schema -PUT all required validationson each field in schema 
- add timestamps to the userSchema

- Add API level validation ON PATCH REQUEST , SIGNUP POST API 
- add API validation for each field 