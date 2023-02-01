import express, { Request, Response } from 'express';
import * as patientServices from '../services/diagnoseService';

export const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send(patientServices.getPublicPatient());
});
