# Introduction
This is a RESTful API with a front-end or user interface(UI). This is the first time I worked with JavaScript, not just Node and React. 

## Description
The back-end consists of an array and an API. The in-memory array is used to store data of university students taking a subject in a semester. The data consists of the student's name, a 3-digit student ID and major.
The API can handle basic CRUD operations and has 6 endpoints:
* `GET /`
* `GET /list`
* `GET /list/:id`
* `POST /list`
* `PUT /list/:id`
* `DELETE /list/:id`

The UI has 3 pages:
* The homepage that displays list of students and their data.
* A page to add student to that list.
* A page to remove student from that list. 

## Usage
To run back-end, navigate to the "back-end" folder using the terminal and use `node app.js`.
```
cd back-end
node app.js
```
The back-end will work in http://localhost:5000

To run UI, navigate to the "front-end" folder using the terminal and use `npm start`. The UI will **not** function if the back-end isn't running.
```
cd front-end
npm start
```
The UI will work in http://localhost:3000
