# quote-collection-full-stack

A full-stack quote collection application made using JavaScript, HTML and CSS for the front-end. Node.js and PostegreSQL for the back-end.

## School of Code Christmas Project

As a project through the christmas break I decided to create a simple application to work on all the skill we have learned so far (6 weeks into the bootcamp).
In my project I will use JS for the front-end (I might look at ReactJS if I have enough time), Node.js for the server and PostegreSQL as a database platform.

### MVP

As an MVP I want my application to fetch the data (quote and author of the quote) from a database and at the click of a button change the quote displayed to the next one in the database.

### Bonus 1

I want my application to allow users to create a new quote and store it in the database, so that it will eventually be displayed on the screen.

### Bonus 2

I want my application to allow users to delete quotes from the database so they will no longer be displayed.

### Bonus 3

I want to allow users to email the quotes they like to themselves (or to other people) using Node.js

### Bonus 4

Use reactJS for the front-end.

## Diary

### Day 1

I set up my project using express-generator-esmodules, created a PostgreSQL database with Heroku, and created the scripts necessary to create, drop and populate the table. I also connected to the database succesfully using environment variables.

### Day 2

I started working on the server of my api and I also set up a few tests to make it easy for me to check that my requests are always being handled correctly and I am not breaking my own code as the handlers become more complex. At the moment, I am handling requests to get all quotes, to create a new quote and to delete a quote by ID. I started working on the front-end as well, creating the basic functionality, so far, I am displaying the first quote in the database and I have added a button for the user to click and display the next quote, when the end of the array of quotes is reached, the first one is displayed again.

### Day 3 
Today I finished my CRUD API by adding the update functionality, and I also fixed the problem I was getting with the tests (Jest kept giving me a yellow warning because some async operation wasn't handled correctly during testing), and added a test for the post functionality of my API. In the second part of the day I finished the basi front-end design and I coded out the main page. I also added a dark/light mode switch functionality which I considered a few options for. I ended up using root variables in my CSS and I to switch between the two modes I use javascript to change the value of the variables in the root element.

### Day 4
I added a get quote by id functionality in my routes which I use to fetch the quote that was currently displayed on the screen when the user clicks on the more options button. I also added a working modal that shows up when the more options button is clicked, and I have created and styled the content inside of it. I created the buttons shown in the modal and I have started working on the JS behind each of the button. I have also divided my code up into more modules as the files where getting bigger, I am trying to keep each file as small as possible and I am using ES modules syntax to import/export in each file. During the second part of the day I started looking into the package nodemailer to allow users to send email with the quotes they like. i managed to make nodemailer work, but I am having problems with importing it correctly.
