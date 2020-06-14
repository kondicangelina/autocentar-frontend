import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Modelvozila } from '../models/modelvozila';


@Injectable({
  providedIn: 'root'
})
export class ModelvozilaService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/vozilo/modelvozila';
  dataChange: BehaviorSubject<Modelvozila[]>= new BehaviorSubject<Modelvozila[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllModelvozila(): Observable<Modelvozila[]> {
    this.httpClient.get<Modelvozila[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getModelvozilaById(id: number): Observable<Modelvozila[]> {
    this.httpClient.get<Modelvozila[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public gerModelvozilaByNaziv(naziv: string): Observable<Modelvozila[]> {
    this.httpClient.get<Modelvozila[]>(this.API_URL+'/filter/naziv/'+naziv).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addModelvozila(modelvozila: Modelvozila): void {
    this.httpClient.post(this.API_URL, modelvozila).subscribe();
  }
  public updateModelvozila(modelvozila: Modelvozila): void {
    this.httpClient.put(this.API_URL+'/'+modelvozila.id, modelvozila).subscribe();
  }
  public deleteModelvozila(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
