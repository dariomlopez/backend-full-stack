/** TODO
 *  [] crear un usuario y contraseña seguro para la conexión --> pestaña "Cuentas de usuarios" en http://localhost/phpmyadmin/index.php
 *
 */
const mysql = require("mysql");
require("dotenv").config();

/** Creando conexión con la base de datos */
const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

database.connect((err) => {
  if(err) throw err;
  console.log("Conexión a base de datos realizada con exito");
});

module.exports = database;