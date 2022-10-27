import { Injectable } from '@angular/core';
import { DayPreview } from 'src/app/models/day';

@Injectable({
  providedIn: 'root'
})
export class PreviewGathererService {

  constructor() { }

  async getWeekData(mondayCount: number): Promise<DayPreview[]> {
    const ret: DayPreview[] = [];

    for (let i = 0; i < 7; i++) {
      ret.push(await this.getDayData(mondayCount + i));
    }

    return ret;
  }

  async getDayData(dayOfTheYear: number): Promise<DayPreview> {
    // todo add storage collection

    return {
      day: dayOfTheYear,
      stats: {
        nutrition: 0
      }
    };
  }
}
