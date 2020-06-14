import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Kategorijausluga } from '../models/kategorijausluga';

@Injectable({
  providedIn: 'root'
})
export class KategorijauslugaService {
  private readonly API_URL= 'http://localhost:8081/autocentar/api/kategorijausluga';
  dataChange: BehaviorSubject<Kategorijausluga[]>=new BehaviorSubject<Kategorijausluga[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllKategorijausluga(): Observable<Kategorijausluga[]> {
    this.httpClient.get<Kategorijausluga[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name +' '+ error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKategorijauslugaById(id: number):Observable<Kategorijausluga[]>{
    this.httpClient.get<Kategorijausluga[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKategorijauslugaByUsluga(naziv: string): Observable<Kategorijausluga[]>{
    this.httpClient.get<Kategorijausluga[]>(this.API_URL+'/filter/naziv/'+naziv).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addKategorijausluga(kategorijausluga: Kategorijausluga): void {
    this.httpClient.post(this.API_URL, kategorijausluga).subscribe();
  }
  public updateKategorijausluga(kategorijausluga: Kategorijausluga): void {
    this.httpClient.put(this.API_URL+'/'+kategorijausluga.id, kategorijausluga).subscribe();
  }
  public deleteKategorijausluga(id: number): void {
    this.httpClient.delete(this.API_URL + '/'+id).subscribe();
  }
}
