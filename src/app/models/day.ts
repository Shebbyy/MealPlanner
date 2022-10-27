import { Meal } from './meal';
import { Stats } from './stats';

export interface DayData extends DayPreview {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export interface DayPreview {
  day: number;
  stats: Stats;
}
