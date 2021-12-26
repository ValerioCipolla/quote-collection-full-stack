# quote-generator-full-stack

A full-stack quote generator made using JS, Node.js and PostegreSQL

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

I started working on the server of my api and I also set up a few tests to make it easy for me to check that my requests are always being handled correctly and I am not breaking my own code as the handlers become more complex. I started working on the front-end as well, creating the basic functionality, so far, I am displaying the first quote in the database and I have added a button for the user to click and display the next quote, when the end of the array of quotes is reached, the first one is displayed again.
