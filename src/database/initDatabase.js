/** TODO
 *  [] crear un usuario y contraseña seguro para la conexión --> pestaña "Cuentas de usuarios" en http://localhost/phpmyadmin/index.php
 *
 */
const dbConfig = require("./databaseConfig");
const mysql = require("mysql2/promise");

const pool = mysql.createPool(dbConfig);

const createDB = async () => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    await connection.query("CREATE DATABASE IF NOT EXISTS ejercicios_programacion");
    await connection.query("USE ejercicios_programacion");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS ejercicios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        enunciado, TEXT NOT NULL,
        explicacion TEXT NOT NULL, 
        tags JSON,
        pistas TEXT NOT NULL,
        creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
    console.log("Base de datos inicializada");
  } catch (err) {
    console.error("Error al inicializar base de datos", error);
  }
};

module.exports = { pool, createDB };