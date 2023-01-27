import { DiaryEntry } from '../types';
import diaryDate from './diaries.json';

const diaries: Array<DiaryEntry> = diaryDate as Array<DiaryEntry>;

export const getEntries = () => {
  return diaries;
};

export const addEntries = () => {
  return null;
};
