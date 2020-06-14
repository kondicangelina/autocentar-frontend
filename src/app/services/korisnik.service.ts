import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Korisnik } from '../models/korisnik';


@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/korisnik';
  dataChange: BehaviorSubject<Korisnik[]>=new BehaviorSubject<Korisnik[]>([]);

  constructor(private httpClient: HttpClient) { }
  public getAllKorisnik(): Observable<Korisnik[]> {
    this.httpClient.get<Korisnik[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKorisnikById(id: number): Observable<Korisnik[]> {
    this.httpClient.get<Korisnik[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKorisnikByIme(ime: string): Observable<Korisnik[]> {
    this.httpClient.get<Korisnik[]>(this.API_URL+'/filter/ime/'+ime).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKorisnikByPrezime(prezime: string): Observable<Korisnik[]> {
    this.httpClient.get<Korisnik[]>(this.API_URL+'/filter/prezime/'+prezime).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKorisnikByUloga(uloga: number): Observable<Korisnik[]> {
    this.httpClient.get<Korisnik[]>(this.API_URL+'/filter/uloga/'+uloga).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addKorisnik(korisnik: Korisnik): void {
    this.httpClient.post(this.API_URL, korisnik).subscribe();
  }
  public updateKorisnik(korisnik: Korisnik): void {
    this.httpClient.put(this.API_URL+'/'+korisnik.id, korisnik).subscribe();
  }
  public deleteKorisnik(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
