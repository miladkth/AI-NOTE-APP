import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/*const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});*/

// 🔧 Här är lösningen (lägg till : (req, res) => void)
/*const summarizeHandler: (req: Request, res: Response) => void = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({ error: 'Ingen text angavs.' });
    return;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Du är en AI som sammanfattar svenska texter.' },
        { role: 'user', content: `Sammanfatta denna text:\n\n${text}` },
      ],
    });

    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kunde inte sammanfatta texten.' });
  }

      
};*/
const summarizeHandler: (req: Request, res: Response) => void = async (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      res.status(400).json({ error: 'Ingen text angavs.' });
      return;
    }
  
    try {
      // Låtsas-sammanfattning
      const summary = `Sammanfattning (demo): ${text.slice(0, 50)}...`;
      res.json({ summary });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Kunde inte sammanfatta texten.' });
    }
  };
  

app.post('/api/summarize', summarizeHandler);

app.listen(3001, () => {
  console.log('✅ Servern körs på http://localhost:3001');
});
