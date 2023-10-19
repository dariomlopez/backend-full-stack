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