import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProgram } from 'src/assets/interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private _url: string = "assets/data/program.json"

  constructor(private http: HttpClient) { }

  getProgram(): Observable<IProgram[]> {
    return this.http.get<IProgram[]>(this._url)
  }
  
}
