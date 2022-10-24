import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { STORAGE } from 'src/app/constant';
import { CapacitorStorageService } from '../capacitor-storage/capacitor-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiLimitTrackerService {
  private apiCallPoints: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private storageService: CapacitorStorageService) {
    this.getUsedPointsFromStorage();
  }

  public getCurrentUsedPoints(): Observable<number> {
    console.log(this.apiCallPoints.getValue());
    return this.apiCallPoints.asObservable();
  }

  public async addCallPoints(newCallPoints: number) {
    const storedVal = this.apiCallPoints.getValue();

    this.apiCallPoints.next(storedVal + newCallPoints);

    await this.storageService.setItem(STORAGE.apiCallDate, new Date().toDateString());
    await this.storageService.setItem(STORAGE.apiCallPoints, (storedVal + newCallPoints).toString());
  }

  private async getUsedPointsFromStorage() {
    const callDate: string = await this.storageService.getItem(STORAGE.apiCallDate);

    if (callDate && new Date().toDateString() === callDate) {
      const storedCallPoints: string = await this.storageService.getItem(STORAGE.apiCallPoints) || '0';
      this.apiCallPoints.next(parseInt(storedCallPoints, 10));
    } else {
      this.storageService.setItem(STORAGE.apiCallPoints, '0');
    }
  }
}
