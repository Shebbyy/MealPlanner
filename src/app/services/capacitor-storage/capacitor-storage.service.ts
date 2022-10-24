import {Injectable} from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class CapacitorStorageService {

  async clear(): Promise<boolean> {
    await Preferences.clear();
    return true;
  }

  async getItem(key: string): Promise<string | null> {
    return await Preferences.get({key}).then(v => v.value);
  }

  async removeItem(key: string): Promise<boolean> {
    await Preferences.remove({key});
    return true;
  }

  async setItem(key: string, value: string): Promise<boolean> {
    await Preferences.set({key, value});
    return true;
  }
}
