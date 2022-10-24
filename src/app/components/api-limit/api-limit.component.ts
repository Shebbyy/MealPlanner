import { Component, OnInit } from '@angular/core';
import { APIKEYS } from 'src/app/constant';
import { ApiLimitTrackerService } from 'src/app/services/api-limit-tracker/api-limit-tracker.service';

@Component({
  selector: 'app-api-limit',
  templateUrl: './api-limit.component.html',
  styleUrls: ['./api-limit.component.scss'],
})
export class ApiLimitComponent implements OnInit {
  public currentlyUsed = 0;

  constructor(private apiLimitService: ApiLimitTrackerService) { }

  async ngOnInit() {
    this.getCurrentUsedPoints();
  }

  private async getCurrentUsedPoints() {
    this.apiLimitService.getCurrentUsedPoints().subscribe((currentPoints) => {
      this.currentlyUsed = currentPoints / APIKEYS.apiLimit;
      console.log(this.currentlyUsed);
    });
  }

}
