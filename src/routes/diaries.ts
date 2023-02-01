import express, { Request, Response } from 'express';
import * as diaryServices from '../services/diarieService';

export const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send(diaryServices.obneterInfoNoSensible());
});

/* router.get('/', (_req: Request, res: Response) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
}); */

router.post('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Adding new entry to diaries',
  });
});
