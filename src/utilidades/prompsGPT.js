/** TODO:
 * [] API de chatgpt
 */

const axios = require("axios");

/** Respuesta chatGPT */
const respuestaChatGPT = async (input) => {
  try {
    /** Sustituir por API */
    const response = await axios.post("API de CHATGPT", 
    {
      prompt: input,
      max_tokens: 2000,
      temperature: 0.7
    });

    return response.data.choices[0].text.trim();

  } catch (error) {
    throw error;
  }
};

/** Solución chatGPT */
const solucionChatGPT = async (enunciado) => {
  const prompt = `Resuelve el siguiente ejercicio: \n${enunciado}`;
  return await respuestaChatGPT(prompt);
};

/** Pista por chatGPT */
