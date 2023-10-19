const Exercise = require("../models/exerciseModel");
const { solucionChatGPT, pistaChatGPT } = require("../utils/prompsGPT");

const exerciseController = {
  /** Obtener todos los ejercicios */
  getAllExercises: async (request, response) => {
    try {
      const exercises = await Exercise.getAllExercises(request.params.id);
      response.json(exercises);
    } catch (error) {
      response.status(500).json({ error: "Erorr del servidor" });
    }
  },

  /** Obtener ejercicio por id */
  getExerciseById: async (request, response) => {
    const { id } = request.params;
    try {
      const exercise = await Exercise.getExerciseById(id);

      if (!exercise) {
        return response.status(404).json({ error: "Error del servidor" });
      }
    } catch (error) {
      response.status(500).json({ error: "Erorr del servidor" });
    }
  },

  /** crear nuevo ejercicio */
  createNewExercise: async (request, response) => {
    const { titulo, explicacion, tags } = request.body;
    try {
      const newExercise = await Exercise.createExercise(titulo, explicacion, tags);
      response.json(newExercise);
    } catch (error) {
      response.status(500).json({ error: "Error del servidor" });
    }
  },

  /** Solución y pistas para un ejercicio por ID */
  exerciseHelpById: async (request, response) => {
    try {
      const ejercise = await Exercise.getExerciseById(request.params.id);

      if(!ejercicio) {
        return response.status(404).send("Ejercicio no encontrado")
      }

      const solucion = await solucionChatGPT(ejercise.explicacion);
      const pistas = await pistaChatGPT(ejercise.explicacion);

      response.json({ ejercise, solucion, pistas });

    } catch (error) {
      console.error("Error al obtener ejercicio", error);
      response.status(500).send("Error del servidor");
    }
  },
};

module.exports = exerciseController;