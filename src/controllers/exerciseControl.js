const exerciseModel = require("../models/exerciseModel");
const { solucionChatGPT, pistaChatGPT } = require("../utils/prompsGPT");

const exerciseController = {
  /** Obtener todos los ejercicios */
  getAllExercises: async (request, response) => {
    try {
      const exercises = await exerciseModel.getAllExercises(request.params.id);
      response.json(exercises);
    } catch (error) {
      response.status(500).json({ error: "Erorr del servidor" });
    }
  },

  /** Obtener ejercicio por id */
  getExerciseById: async (request, response) => {
    const { id } = request.params;
    try {
      const exercise = await exerciseModel.getExerciseById(id);

      if (!exercise) {
        return response.status(404).json({ error: "Error del servidor" });
      }
    }catch (error) {
      response.status(500).json({ error: "Erorr del servidor" });
    }
  },
}