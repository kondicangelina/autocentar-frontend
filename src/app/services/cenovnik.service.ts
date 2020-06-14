import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cenovnik } from '../models/cenovnik';

@Injectable({
  providedIn: 'root'
})
export class CenovnikService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/naplata/cenovnik';
  dataChange: BehaviorSubject<Cenovnik[]>=new BehaviorSubject<Cenovnik[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllCenovnik(): Observable<Cenovnik[]> {
    this.httpClient.get<Cenovnik[]>(this.API_URL).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getCenovnikById(id: number): Observable<Cenovnik[]> {
    this.httpClient.get<Cenovnik[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getCenovnikByNaziv(naziv: string): Observable<Cenovnik[]> {
    this.httpClient.get<Cenovnik[]>(this.API_URL+'/filter/usluga/'+naziv).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addCenovnik(cenovnik: Cenovnik): void {
    this.httpClient.post(this.API_URL, cenovnik).subscribe();
  }
  public updateCenovnik(cenovnik: Cenovnik): void {
    this.httpClient.put(this.API_URL+'/'+cenovnik.id, cenovnik).subscribe();
  }
  public deleteCenovnik(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
