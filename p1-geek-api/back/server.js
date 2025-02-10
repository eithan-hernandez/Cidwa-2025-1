require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Permitir solicitudes desde el frontend

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Endpoint para calcular el porcentaje de geek
app.post('/geek-check', async (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Se requiere una descripción." });
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: `Dada la siguiente descripción sobre una persona: "${description}", ¿qué tan geek es? Devuelve únicamente un JSON con:
          {
            "geekPercentage": <número entre 0 y 100>,
            "comment": "<mensaje chistoso o divertido>"
          }`
        }
      ],
     // response_format: "json_object"
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });




// convertimos la cadena en json

//const rawString = "```json\n{\n  \"geekPercentage\": 50,\n  \"comment\": \"Tienes un pie en el mundo geek, pero cuidado, podrías ser absorbido por el universo de los superhéroes en cualquier momento. ¡No olvides tu capa!\"\n}\n```";

const rawString = response.data.choices[0].message.content
// 1️⃣ Eliminar los backticks y la etiqueta "json"
const cleanedString = rawString.replace(/^```json\n|\n```$/g, "");

// 2️⃣ Convertir a objeto JSON
try {
  const jsonObject = JSON.parse(cleanedString);
  console.log(jsonObject);
	res.json(jsonObject);
} catch (error) {
  console.error("Error al parsear JSON:", error);
}



    // Enviamos la respuesta JSON directamente
    // res.json(response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error al consultar OpenAI:", error);
    res.status(500).json({ message: "Error al procesar la solicitud." });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
