import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProgram } from 'src/assets/interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private _url: string = "assets/data/program.json"
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  getProgram(): Observable<IProgram[]> {
    return this.http.get<IProgram[]>(this._url)
  }
  
  setProgram(program): Observable<IProgram> {
    return this.http.post<IProgram>(this._url, program, this.httpHeaders)
  }
}
