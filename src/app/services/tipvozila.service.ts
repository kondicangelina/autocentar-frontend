import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Tipvozila } from '../models/tipvozila';

@Injectable({
  providedIn: 'root'
})
export class TipvozilaService {

  private readonly API_URL ='http://localhost:8081/autocentar/api/vozilo/tipvozila';
  dataChange: BehaviorSubject<Tipvozila[]>=new BehaviorSubject<Tipvozila[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllTipvozila(): Observable<Tipvozila[]> {
    this.httpClient.get<Tipvozila[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getTipvozilaById(id: number): Observable<Tipvozila[]> {
    this.httpClient.get<Tipvozila[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getTipvozilaByNaziv(naziv: string): Observable<Tipvozila[]> {
    this.httpClient.get<Tipvozila[]>(this.API_URL+'/filter/naziv'+naziv).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addTipvozila(tipvozila: Tipvozila): void {
    this.httpClient.post(this.API_URL, tipvozila).subscribe();
  }
  public updateTipvozila(tipvozila: Tipvozila): void {
    this.httpClient.put(this.API_URL+'/'+tipvozila.id,tipvozila).subscribe();
  }
  public deleteTipvozila(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
