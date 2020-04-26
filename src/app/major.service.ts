import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMajor } from 'src/assets/interfaces/major';

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  private _url: string = "http://localhost:8000/api/major"
  constructor(private http: HttpClient) { }

  getMajors(): Observable<IMajor[]> {
    return this.http.get<IMajor[]>(this._url)
  }
}
