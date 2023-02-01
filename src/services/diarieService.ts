import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryDate from './diaries.json';

const diaries: DiaryEntry[] = diaryDate as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => {
  return diaries;
};

export const obneterInfoNoSensible = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility, temperature }) => ({
    id,
    date,
    weather,
    visibility,
    temperature,
  }));
};
export const addEntries = (): undefined => {
  return undefined;
};
