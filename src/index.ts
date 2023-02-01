import express, { Request, Response } from 'express';
import { router as diaryRouter } from './routes/diaries';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'working',
  });
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
