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
