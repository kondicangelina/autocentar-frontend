import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Rezervacija } from '../models/rezervacija';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/rezervacija';
  dataChange: BehaviorSubject<Rezervacija[]> = new BehaviorSubject<Rezervacija[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllRezervacija(): Observable<Rezervacija[]> {
    this.httpClient.get<Rezervacija[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRezervacijaById(id: number): Observable<Rezervacija[]> {
    this.httpClient.get<Rezervacija[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRezervacijaByDatumrezervacije(datum: string): Observable<Rezervacija[]> {
    this.httpClient.get<Rezervacija[]>(this.API_URL+'/filter/datumrezervacije/'+datum).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getRezervacijaByVozilo(vozilo: number): Observable<Rezervacija[]> {
    this.httpClient.get<Rezervacija[]>(this.API_URL+'/filter/vozilo/'+vozilo).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addRezervacija(rezervacija: Rezervacija): void {
    this.httpClient.post(this.API_URL, rezervacija).subscribe();
  }
  public updateRezervacija(rezervacija: Rezervacija): void {
    this.httpClient.put(this.API_URL+'/'+rezervacija.id, rezervacija).subscribe();
  }
  public deleteRezervacija(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
