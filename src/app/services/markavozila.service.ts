import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Markavozila } from '../models/markavozila';

@Injectable({
  providedIn: 'root'
})
export class MarkavozilaService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/vozilo/markavozila';
  dataChange: BehaviorSubject<Markavozila[]>=new BehaviorSubject<Markavozila[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllMarkavozila(): Observable<Markavozila[]> {
    this.httpClient.get<Markavozila[]>(this.API_URL).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getMarkavozilaById(id: number): Observable<Markavozila[]> {
    this.httpClient.get<Markavozila[]>(this.API_URL+'/'+id).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getMarkavozilaByNaziv(naziv: string): Observable<Markavozila[]> {
    this.httpClient.get<Markavozila[]>(this.API_URL+'/filter/naziv/'+naziv).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addMarkavozila(markavozila: Markavozila): void {
    this.httpClient.post(this.API_URL, markavozila).subscribe();
  }
  public updateMarkavozila(markavozila: Markavozila): void {
    this.httpClient.put(this.API_URL+'/'+markavozila.id, markavozila).subscribe();
  }
  public deleteMarkavozila(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
