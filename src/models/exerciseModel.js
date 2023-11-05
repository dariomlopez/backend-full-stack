const database = require("../database/databaseConfig");

const Exercise = {
  /** query para obtener todos los ejercicios */
  getAllExercises: async () => {
    const [rows] = await database.promise().query("SELECT * FROM ejercicios");
    return rows;
  },
  /** query para obtener un ejercicio por id */
  getExerciseById: async (id) => {
    const [rows] = await database.promise().query("SELECT * FROM ejercicios WHERE id = ?", [id]);
    return rows[0];
  },
  /** query para crear un nuevo ejercicio con campo titulo, enunciado, explicacion y tag  */
  createExercise: async (titulo, enunciado, explicacion, tags) => {
    const [result] = await database.promise().query("INSERT INTO ejercicios (titulo, enunciado, explicacion, tags) VALUES (?, ?, ?, ?)", [titulo, enunciado, explicacion, tags]);
    return { id: result.insertId, titulo, enunciado, explicacion, tags };
  },

  /** Obtener pista de un ejercicio por id (clue == pista en ingles)*/
  clueByExerciseId: async (id) => {
    const [rows] = await database.promise().query("SELECT pistas FROM ejercicios WHERE id = ?", [id]);
    return rows[0].pistas;
  },

  /** Obtener solución por id */
  solutionByExerciseId: async (id) => {
    const [rows] = await database.promise().query("SELECT solucion FROM ejercicios WHERE id = ?", [id]);
    return rows[0].solucion;
  }
};

module.exports = Exercise;