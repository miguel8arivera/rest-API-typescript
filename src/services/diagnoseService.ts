import listPatient from '../data/patients.json';
import { PatientsDiagnose, PublicPatient } from '../types';

const patients: PatientsDiagnose[] = listPatient as PatientsDiagnose[];

export const getPatients = (): PatientsDiagnose[] => {
  return patients;
};

export const getPublicPatient = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export const addPatient = (): undefined => {
  return undefined;
};
