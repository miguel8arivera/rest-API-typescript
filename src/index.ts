import express, { Request, Response } from 'express';
import { router as diaryRouter } from './routes/diaries';

const app = express();

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'working',
  });
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
