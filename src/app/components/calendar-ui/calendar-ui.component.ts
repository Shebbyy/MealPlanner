import { Component, OnInit } from '@angular/core';
import { DayPreview } from 'src/app/models/day';
import { PreviewGathererService } from 'src/app/services/preview-gatherer/preview-gatherer.service';
import { TimeConverterService } from 'src/app/services/time-converter/time-converter.service';

@Component({
  selector: 'app-calendar-ui',
  templateUrl: './calendar-ui.component.html',
  styleUrls: ['./calendar-ui.component.scss'],
})
export class CalendarUiComponent implements OnInit {
  public headerText = '24 - 31 Oktober 2022';
  public week: DayPreview[] = [];

  constructor(private previewGatherer: PreviewGathererService,
              private timeConverter: TimeConverterService) { }

  ngOnInit() {
    this.setHeader(this.timeConverter.getCurrentWeek(), new Date().getFullYear());
  }

  /**
   *
   * @param weekNumber gets the week preview data from the service
   */
  async getWeekData(weekNumber: number) {
    const mondayCount = weekNumber * 7;

    this.week = await this.previewGatherer.getWeekData(mondayCount);
  }

  /**
   * opens the day view for the given day
   *
   * @param dayNumber
   */
  public openDayView(dayNumber: number) {

  }

  /**
   * Creates the header for the calendar
   */
  private setHeader(week: number, year: number) {
    const startDate = this.timeConverter.getDateOfISOWeek(week, year);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    this.headerText = startDate.getDate() + '.' + (startDate.getMonth() + 1) +
    ' - ' +
    endDate.getDate() + '.' + (endDate.getMonth() + 1);
  }
}
