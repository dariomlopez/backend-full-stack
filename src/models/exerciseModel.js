const database = require("../database/databaseConfig");

const Exercise = {
  /** query para obtener todos los ejercicios */
  getAllExercises: async () => {
    const [rows] = await database.query("SELECT * FROM ejercicios");
    return rows;
  },
  /** query para obtener un ejercicio por id */
  getExerciseById: async (id) => {
    const [rows] = await database.query("SELECT * FROM ejercicios WHERE id = ?", [id]);
    return rows[0];
  },
  /** query para crear un nuevo ejercicio con campo titulo, explicacion y tag  */
  createExercise: async (titulo, explicacion, tags) => {
    const [result] = await database.query("INSERT INTO ejercicios(titulo, explicacion, tags) VALUES (?, ?, ?)", [titulo, explicacion, tags]);
    return { id: result.insertId, titulo, explicacion, tags };
  },
  /** Obtener pista de un ejercicio por id (clue == pista en ingles)*/
  clueByExerciseId: async (id) => {
    const [rows] = await database.query("SELECT pistas FROM ejercicios WHERE id = ?", [id]);
    return rows[0].pistas;
  },
};

module.exports = Exercise;