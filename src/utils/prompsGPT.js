
const axios = require("axios");
require("dotenv").config();
/** API_KEYS */
const organization = "org-PcyAASZa7mn9hOq9B8FDPlir";
const apiKey = process.env.OPENAI_API_KEY;

/** Respuesta chatGPT */
const respuestaChatGPT = async (input) => {
  try {
    /** Sustituir por API */
    const response = await axios.post(apiKey, 
    {
      prompt: input,
      max_tokens: 2000,
      temperature: 0.7
    });

    return response.data.choices[0].text.trim();

  } catch (error) {
    /** Manejo de errores si la petición a chatgpt falla */
    console.error("Error en la peticion a la API de OpenAI", error.message);
    throw new Error("No se pudo obtener una respuesta de ChatGPT.");
  }
};

/** Solución chatGPT */
const solucionChatGPT = async (enunciado) => {
  const prompt = `Resuelve el siguiente ejercicio: \n${enunciado}`;
  return await respuestaChatGPT(prompt);
};

/** Pista por chatGPT */
const pistaChatGPT = async (enunciado) => {
  const prompt = `Proporciona pistas para resolver el siguiente ejercicio: \n${enunciado}`;
  return await respuestaChatGPT(prompt);
};

module.exports = { solucionChatGPT, pistaChatGPT };