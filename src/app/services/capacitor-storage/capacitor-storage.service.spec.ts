import {TestBed} from '@angular/core/testing';
import {AbstractStorageService} from '../abstract-storage.service';
import {CapacitorStorageService} from './capacitor-storage.service';

describe('Storage » CapacitorStorageService', () => {
  let storage: CapacitorStorageService;

  const clearUpStorage = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_TEST_1);
    window.localStorage.removeItem(LOCAL_STORAGE_TEST_2);
  };

  const UNIT_TEST_TEST_1 = 'UNIT_TEST_TEST_1';
  const UNIT_TEST_TEST_2 = 'UNIT_TEST_TEST_2';
  const LOCAL_STORAGE_TEST_1 = 'CapacitorStorage.UNIT_TEST_TEST_1';
  const LOCAL_STORAGE_TEST_2 = 'CapacitorStorage.UNIT_TEST_TEST_2';

  beforeEach(() => {
    clearUpStorage();
    TestBed.configureTestingModule({
      providers: [
        {provide: AbstractStorageService, useClass: CapacitorStorageService}
      ]
    });
    storage = TestBed.inject(AbstractStorageService);
  });

  afterAll(() => {
    clearUpStorage();
  });

  it('setItem & getItem', async () => {
    const setItemSpy = spyOn(window.localStorage, 'setItem').and.callThrough();
    const getItemSpy = spyOn(window.localStorage, 'getItem').and.callThrough();

    expect(storage).toBeTruthy();
    await expectAsync(storage.getItem(UNIT_TEST_TEST_1)).toBeResolvedTo(null);
    expect(getItemSpy.calls.count()).toBe(1);

    await expectAsync(storage.setItem(UNIT_TEST_TEST_1, '1')).toBeResolvedTo(true);
    await expectAsync(storage.getItem(UNIT_TEST_TEST_1)).toBeResolvedTo('1');
    expect(setItemSpy.calls.count()).toBe(1);
    expect(getItemSpy.calls.count()).toBe(2);

    await expectAsync(storage.setItem(UNIT_TEST_TEST_2, '2')).toBeResolvedTo(true);
    await expectAsync(storage.getItem(UNIT_TEST_TEST_1)).toBeResolvedTo('1');
    await expectAsync(storage.getItem(UNIT_TEST_TEST_2)).toBeResolvedTo('2');
    expect(setItemSpy.calls.count()).toBe(2);
    expect(getItemSpy.calls.count()).toBe(4);
  });

  it('removeItem', async () => {
    window.localStorage.setItem(LOCAL_STORAGE_TEST_1, 'Item-To-Remove');
    await expectAsync(storage.getItem(UNIT_TEST_TEST_1)).toBeResolvedTo('Item-To-Remove');
    await expectAsync(storage.removeItem(UNIT_TEST_TEST_1)).toBeResolvedTo(true);
    expect(window.localStorage.getItem(LOCAL_STORAGE_TEST_1)).toBeNull();
  });

  it('clearItem', async () => {
    window.localStorage.setItem(LOCAL_STORAGE_TEST_1, 'Item-To-Clear');
    window.localStorage.setItem(LOCAL_STORAGE_TEST_2, 'Item-To-Clear');
    await expectAsync(storage.getItem(UNIT_TEST_TEST_1)).toBeResolvedTo('Item-To-Clear');
    await expectAsync(storage.getItem(UNIT_TEST_TEST_2)).toBeResolvedTo('Item-To-Clear');
    await expectAsync(storage.clear()).toBeResolvedTo(true);
    expect(window.localStorage.getItem(LOCAL_STORAGE_TEST_1)).toBeNull();
    expect(window.localStorage.getItem(LOCAL_STORAGE_TEST_2)).toBeNull();
  });
});
