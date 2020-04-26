import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProgram } from 'src/assets/interfaces/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private _url: string = "http://localhost:8000/api/program/"
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

  updateProgram(program): Observable<IProgram> {
    return this.http.put<IProgram>(this._url + program.id + '/', program, this.httpHeaders)
  }

  deleteProgram(id): Observable<any> {
    return this.http.delete<any>(this._url + id + '/')
  }
}
