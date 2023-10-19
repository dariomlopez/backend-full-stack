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

/** Importar las rutas */
const ejerciciosRoutes = requier("./src/routes/exercisesRoutes");

/** Middleware para parsear JSON */
app.use(express.json());

/** Rutas */
/** Obtener todos los ejercicios */
app.get("/ejercicios", async (request, response) => {
  try {
    const ejercicios = await Exercise.getAllExercises();
    response.json(ejercicios);
  } catch (error) {
    console.error("Error al obtener ejercicios:", error);
    response.status(500).send("Error del servidor");
  }
});

/** Obtener ejercicio por ID */
app.get("/ejercicios/:id", async (request, response) => {
  try {
    const ejercicio = await Exercise.getExerciseById(request.params.id);

    if (!ejercicio) {
      return response.status(404).send("Ejercicio no encontrado");
    }

    response.json(ejercicio);
  } catch(error) {
    console.error("Error al obtener ejercicios:", error);
    response.status(500).send("Error del servidor");
  }
});

/** Crear un ejercicio */
app.post("/ejercicios", async (request, response) => {
  try {
    const { titulo, explicacion, tags, pistas } = request.body;
    const nuevoEjercicio = await Exercise.createExercise(titulo, explicacion, tags, pistas);
  } catch (error) {
    console.error("Error al obtener ejercicios:", error);
    response.status(500).send("Error del servidor");
  }
});

/** Obtener pista por id de ejercicio */
app.get("ejercicios/:id/pista", async (request, response) => {
  try {
    const pista = await Exercise.clueByExerciseId(request.params.id);

    if (!pista) {
      return response.status(404).send("Pista no encontrada");
    }

    response.json(pista);
  } catch (error) {
    console.error("Error al obtener ejercicios:", error);
    response.status(500).send("Error del servidor");
  }
});

/** Iniciar el servidor */
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`)
})