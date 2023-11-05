const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");
const { solucionChatGPT, pistaChatGPT } = require("../utils/prompsGPT");

/** Obtener ejercicio por ID */
router.get("/:id", async (request, response) => {
  try {
    const ejercicio = await Exercise.getExerciseById(request.params.id);

    if (!ejercicio) {
      return response.status(404).send("Ejercicio no encontrado");
    }

    const solucion = await solucionChatGPT(ejercicio.explicacion);
    const pistas = await pistaChatGPT(ejercicio.explicacion);

    response.json({ ejercicio, solucion, pistas });

  } catch (error) {
    console.error("Error al obtener el ejercicio", error);
    response.status(500).send("Error del servidor");
  }
});


/** Obtener todos los ejercicios */
router.get("/", async (request, response) => {
  try {
    const ejercicios = await Exercise.getAllExercises();

    response.json(ejercicios);
  } catch (error) {
    console.error("Error al obtener los ejercicios", error);
    response.status(500).send("Error del servidor");
  }
});

/** Obtener pista por id de ejercicio */
router.get("/:id", async (request, response) => {
  try {
    const pista = await Exercise.clueByExerciseId(request.params.id);

    if (!pista) {
      return response.status(404).send("Pista no encontrada");
    }

    response.json({pista});
  } catch (error) {
    console.error("Error al obtener la pista del ejercicio", error);
    response.status(500).send("Error del servidor");
  }
});

/** Obtener solución por id de ejercicio */
router.get("/:id", async (request, response) => {
  try {
    const solucion = await Exercise.clueByExerciseId(request.params.id);

    if (!pista) {
      return response.status(404).send("Solución no encontrada");
    }

    response.json({solucion});
  } catch (error) {
    console.error("Error al obtener la solución del ejercicio", error);
    response.status(500).send("Error del servidor");
  }
});

/**Crear un ejercicio */
router.post("/", async (request, response) => {
  const { titulo, enunciado, explicacion, tags } = request.body;

  try {
    const nuevoEjercicio = await Exercise.createExercise(titulo, enunciado, explicacion, tags);

    response.json(nuevoEjercicio);
  } catch (error) {
    console.error("Error al intentar crear un nuevo ejercicio", error);
    response.status(500).send("Error del servidor");
  }
});