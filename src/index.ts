import express, { Request, Response } from 'express';
import { router as diaryRouter } from './routes/diaries';
import { router as patientRouter } from './routes/patients';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'working',
  });
});

app.use('/api/diaries', diaryRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
