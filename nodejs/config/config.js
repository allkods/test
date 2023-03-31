const cnf = require("dotenv").config;

cnf();

// MONGODB DETAILS
const MONGO_USERNAME = ""
const MONGO_PASSWORD = "";
const MONGO_DATABASE = "demo"
const MONGO_STRING = "mongodb://localhost:27017"


// const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
// const MYSQL_USER = process.env.MYSQL_USER || 'allkodsi_logica';
// const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'doctor@1989';
// const MYSQL_DATABASE = process.env.MYSQL_HOST || 'allkodsi_logica';
// const DIALECT = process.env.DB_DRIVER || 'mysql';

const MONGO = {
    username : MONGO_USERNAME,
    password : MONGO_PASSWORD,
    database : MONGO_DATABASE,
    string : MONGO_STRING
}


// SERVER DETAILS
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost'
const SERVER_PORT = process.env.SERVER_PORT || 8000

const SERVER = {
    hostname : SERVER_HOSTNAME,
    port : SERVER_PORT
}

const config = {
    mongo : MONGO,
    server : SERVER
}

module.exports =  config;