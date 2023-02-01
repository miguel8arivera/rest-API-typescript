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
