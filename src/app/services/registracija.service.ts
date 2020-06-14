import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Registracija } from '../models/registracija';

@Injectable({
  providedIn: 'root'
})
export class RegistracijaService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/registracija';
  dataChange: BehaviorSubject<Registracija[]> = new BehaviorSubject<Registracija[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllRegistracija(): Observable<Registracija[]> {
    this.httpClient.get<Registracija[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRegistracijaById(id: number): Observable<Registracija[]> {
    this.httpClient.get<Registracija[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRegistracijaByBrojtablica(tablice: string): Observable<Registracija[]> {
    this.httpClient.get<Registracija[]>(this.API_URL+'/filter/brojtablica/'+tablice).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRegistracijaByDatumregistracije(datum: string): Observable<Registracija[]> {
    this.httpClient.get<Registracija[]>(this.API_URL+'/filter/datum/'+datum).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRegistracijaByVozilo(vozilo: number): Observable<Registracija[]> {
    this.httpClient.get<Registracija[]>(this.API_URL+'/filter/vozilo/'+vozilo).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addRegistracija(registracija: Registracija): void {
    this.httpClient.post(this.API_URL, registracija).subscribe();
  }
  public updateRegistracija(registracija: Registracija): void {
    this.httpClient.put(this.API_URL+'/'+registracija.id, registracija).subscribe();
  }
  public deleteRegistracija(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
