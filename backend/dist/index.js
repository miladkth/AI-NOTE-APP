"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
const summarizeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text } = req.body;
    if (!text) {
        res.status(400).json({ error: 'Ingen text angavs.' });
        return;
    }
    try {
        // Låtsas-sammanfattning
        const summary = `Sammanfattning (demo): ${text.slice(0, 50)}...`;
        res.json({ summary });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Kunde inte sammanfatta texten.' });
    }
});
app.post('/api/summarize', summarizeHandler);
app.listen(3001, () => {
    console.log('✅ Servern körs på http://localhost:3001');
});
