# Login System with Node.js, Express.js, and MySQL
___

## Description
___

This project is a simple login and registration system built using Node.js with Express.js as the backend framework and MySQL as the database. The system allows users to register, log in, and maintain session authentication.

## Features
___

* User registration (Sign Up)
* User authentication (Login)
* Secure password storage
* Session management
* Environment configuration using dotenv
* Handlebars (hbs) for templating

## Technologies Used
___

1. ### Node.js: JavaScript runtime environment
2. ### Express.js: Web framework for Node.js
3. ### MySQL: Relational database
4. ### dotenv: Environment variable management
5. ### hbs: Handlebars template engine
6. ### nodemon: Development tool for automatic server restart

## Installation
___


### Prerequisites:

### Make sure you have the following installed:

* Node.js
* MySQL

## Setup Steps
___

### Clone this repository:

```bash
git clone https://github.com/StevenBalagueraP/LogInSystem.git
cd LogIn
```

## Install dependencies:
___


```bash
npm install
```

## Configure environment variables:
___

### Create a `.env` file in the root directory

### Add the following environment variables:

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

## Set up the database:
___


### Open MySQL and create a database:

### CREATE DATABASE your_database_name;

### Import the database schema if available.

## Start the server:
___


```bash
npm start
```

### put the following URL on your browser 

```bash
http://localhost:3000
```


License

This project is open-source and available under the MIT License.