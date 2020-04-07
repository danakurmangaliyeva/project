import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStatus } from 'src/assets/interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private _url: string = "assets/data/status.json"
  constructor(private http: HttpClient) { }

  getStatuses(): Observable<IStatus[]> {
    return this.http.get<IStatus[]>(this._url)
  }
}
