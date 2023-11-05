
const mysql = require("mysql2");
require("dotenv").config();
const { createDB } = require("./initDatabase");

/** Creando conexión con la base de datos */
const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "ejercicios"
});

/** Manejo de errores en la conexión */
database.connect((err) => {
  if(err) throw err;
  console.log("Conexión exitosa con base de datos");
});

/** Inicialización de la base de datos llamando a la función creada en el archivo initDatabase.js */
createDB();
module.exports = database;