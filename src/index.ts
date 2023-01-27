import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'working',
  });
});

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
