import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Fetching all entry diaries now',
  });
});

router.post('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Adding new entry to diaries',
  });
});
