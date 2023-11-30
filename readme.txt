# Creating a new NodeJS application

1. Make sure you are the current folder 
(i.e the current working directory)

2. `npm init` to create a new NodeJS application or `npm init -y` to skip all the questions

3. Install Express with `npm install express` / 'yarn add express'

4. Create a new `.gitignore` file and add the following: `node_modules`

5. For your GITPOD, run `npm install -g nodemon` everytime you restart gidpod but 
if is usingyour own computer, then just once. The `-g` means `global` -- it will be 
applied to all node applications

6. To run the server `node + file name of the JS file` i.e. if the file name
is index.js, the line to use would be `node index.js`

7. To stop the server 'control + c`

8. To run the nodemon enter 'npx nodemon' into the terminal 

9. To add handlebars enter 'yarn add hbs' into the terminal


Depending on the view point request and response will be information from 
the client that is needed

There are 2 ways that the client can ask for information
1. URL (refer to 01b-revision)
2. Form 