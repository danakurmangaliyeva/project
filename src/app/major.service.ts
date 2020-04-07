import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMajor } from 'src/assets/interfaces/major';

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  private _url: string = "assets/data/major.json"
  constructor(private http: HttpClient) { }

  getMajors(): Observable<IMajor[]> {
    return this.http.get<IMajor[]>(this._url)
  }
}
