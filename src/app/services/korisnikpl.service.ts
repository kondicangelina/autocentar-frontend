import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Korisnikpl } from '../models/korisnikpl';

@Injectable({
  providedIn: 'root'
})
export class KorisnikplService {

  private readonly API_URL= 'http://localhost:8081/autocentar/api/korisnik/korisnikpl';
  dataChange: BehaviorSubject<Korisnikpl[]>=new BehaviorSubject<Korisnikpl[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllKorisnikpl(): Observable<Korisnikpl[]> {
    this.httpClient.get<Korisnikpl[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKorisnikplById(id: number): Observable<Korisnikpl[]>{
    this.httpClient.get<Korisnikpl[]>(this.API_URL+'/'+id).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKorisnikplByNaziv(naziv: string): Observable<Korisnikpl[]>{
    this.httpClient.get<Korisnikpl[]>(this.API_URL+'/filter/naziv/'+naziv).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addKorisnikpl(korisnikpl: Korisnikpl): void {
    this.httpClient.post(this.API_URL, korisnikpl).subscribe();
  }
  public updateKorisnikpl(korisnikpl: Korisnikpl): void {
    this.httpClient.put(this.API_URL+'/'+korisnikpl.id, korisnikpl).subscribe();
  }
  public deleteKorisnikpl(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
