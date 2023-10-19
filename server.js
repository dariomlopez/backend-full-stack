const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/** Importar configuración base de datos */
const database = require(".src/database/databaseConfig");
const { createDB } = require(".src/database/initDatabase");
/** Iniciar la base de datos */
createDB();

/** Importar modelo de ejercicios */
const Exercise = require("./src/models/exerciseModel");

/** Rutas */
/** Obtener todos los ejercicios */
app.get("/ejercicios", async (request, response) => {
  try {
    
  } catch (error) {

  }
})