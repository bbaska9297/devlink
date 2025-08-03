import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Developer } from 'src/app/shared/developers/developers.model';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  private readonly STORAGE_KEY = 'developers';
  private _developers$: BehaviorSubject<Developer[]>;
  constructor() {
    const saved = this.loadFromStorage();
    const defaultList: Developer[] = [
      {
        id: 1,
        name: 'Bharathi',
        skills: ['Angular,React,TypeScript'],
        experience: 5,
        location: 'Chennai',
      },
    ];
    this._developers$ = new BehaviorSubject<Developer[]>(
      saved && saved.length ? saved : defaultList
    );
  }

  getDevelopers(): Observable<Developer[]> {
    return this._developers$.asObservable();
  }
  addDeveloper(newDev: Developer) {
    const current = this._developers$.getValue();
    const updated = [...current, { ...newDev, id: Date.now() }];
    this._developers$.next(updated);
    this.saveToStorage(updated);
  }
  deleteDeveloper(id: number): void {
    const current = this._developers$.getValue();
    const updated = current.filter((dev: { id: number }) => dev.id !== id);
    this._developers$.next(updated);
    this.saveToStorage(updated);
  }
  getDeveloperById(id: number): Developer | undefined {
    return this._developers$
      .getValue()
      .find((dev: { id: number }) => dev.id === id);
  }
  private saveToStorage(data: Developer[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
  private loadFromStorage(): Developer[] | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }
}
