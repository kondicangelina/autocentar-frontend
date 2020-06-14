import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Naplata } from '../models/naplata';

@Injectable({
  providedIn: 'root'
})
export class NaplataService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/naplata';
  dataChange: BehaviorSubject<Naplata[]>=new BehaviorSubject<Naplata[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllNaplata(): Observable<Naplata[]> {
    this.httpClient.get<Naplata[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getNaplataById(id: number): Observable<Naplata[]> {
    this.httpClient.get<Naplata[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getNaplataByUsluga(usluga: string): Observable<Naplata[]> {
    this.httpClient.get<Naplata[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addNaplata(naplata: Naplata): void {
    this.httpClient.post(this.API_URL, naplata).subscribe();
  }
  public updateNaplata(naplata: Naplata): void {
    this.httpClient.put(this.API_URL+'/'+naplata.id, naplata).subscribe();
  }
  public deleteNaplata(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
