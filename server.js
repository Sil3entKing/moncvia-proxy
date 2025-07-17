const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/api", async (req, res) => {
  const { prompt, role } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: role },
        { role: "user", content: prompt },
      ],
    });

    res.json({ response: completion.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur proxy en ligne sur le port ${PORT}`));
