## Acme Schools

Acme Schools is a fullstack CRUD application for managing students and the schools they attend. This project was assigned as the culmination of my Junior Phase at Fullstack Academy.

## Major Technologies/Frameworks

<b>Back End</b>

- [Node]
- [Express]
- [PostgreSQL]
- [Sequelize]

<b>Front End</b>

- [Bulma]
- [React]
- [React Router]
- [Redux]
- [React Redux]
- [Redux Reselect]

<b>Testing and Development</b>

- [Mocha]
- [Chai]
- [Supertest]
- [Webpack]
- [Babel]

## Features

<b>Users can:</b>

- See all schools
- See a single school and the students who attend it
- See the most popular school
- See the school with the best GPA
- Add a student to a school
- Reassign a student to a different school
- Create a student
- Update a student's information
- Delete a student

## Usage

See the deployed version here: (https://vert-madame-81975.herokuapp.com/#/).

Since anyone can create/edit students, please be respectful and do not add any offensive names or emails.
If you see any offensive content for a student, please delete that student. In addition, do not add any information which you do not wish to be public, specifically emails.

The currently deployed branch is 'release/1.0'.

## Installation

If you do not have Node (https://nodejs.org/en/download/) and PostgreSQL (https://postgresapp.com/downloads.html) installed, you will need to install both.

<b>Then:</b>

- Clone this directory && cd into 'acme-schools'
- Create the database 'acme-schools' by executing `createdb acme-schools` in the terminal or using a GUI
- execute `npm install` to install the packages
- execute `npm run seed` to seed the database
- execute `npm run start:dev` to start the application server
- navigate to (http://localhost:3000/#/) in the browser

## Tests

Make sure you have gone through the installation instructions before testing, and are cd'd into the 'acme-schools' directory.

To test the models, execute: `npm run test:models`.
To test the Sequelize error handling responses, execute: `npm run test:routes`.

## Contribute

If you find any bugs, or have any suggestions, please feel free to make an issue or pull request!
