export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  temperature: number;
  comment: string;
}

/* export type NonSensitiveDiaryEntry = Pick<
  DiaryEntry,
  'id' | 'date' | 'weather' | 'visibility' | 'temperature'
>; */

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type Gender = 'Male' | 'Famale' | 'Other';

export interface PatientsDiagnose {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type PublicPatient = Omit<PatientsDiagnose, 'ssn'>;
