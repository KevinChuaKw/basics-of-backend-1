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

10. To add wax-on enter 'yarn add wax-on' into the terminal 

11. If we never set app.set view engine, you need to put the
extension at the back of the hbs file. I.e. to put 'index.hbs'
when you want to render the hbs file

12. Any part of the base hbs file that will be different. You 
will replace with a 'block'
You can also set the default 'title' using the base file
The children can override this if there is block for 'title'

13. HBS file is not a HTML file

14. app.use(express.static("public")); is very important for taking static files

15. In the hbs file, when we tag the div, 'id' and 'class' are ignored. Only the 'name' is picked up
thats why we use 'name' more



Depending on the view point request and response will be information from 
the client that is needed

There are 2 ways that the client can ask for information
1. URL (refer to 01b-revision)
2. Form 