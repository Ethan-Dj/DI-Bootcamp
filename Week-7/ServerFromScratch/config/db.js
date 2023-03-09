const knex = require("knex")
// Knex is a SQL query builder, allows us to build querys with webSQL

const dotenv = require("dotenv")
//loads .env folder that loads all server variables from one place,
//the dotenv file 



const db = {
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    }
  };
// I got this from the knex module website.
// this just tells the knex module how to access 
// data from the websql server

module.exports = db
// this allows us to access the database from other files within the environment
