import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Kategorijavozila } from '../models/kategorijavozila';

@Injectable({
  providedIn: 'root'
})
export class KategorijavozilaService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/vozilo/kategorijavozila';
  dataChange: BehaviorSubject<Kategorijavozila[]>=new BehaviorSubject<Kategorijavozila[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllKategorijavozila(): Observable<Kategorijavozila[]> {
    this.httpClient.get<Kategorijavozila[]>(this.API_URL).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKategorijavozilaById(id: number): Observable<Kategorijavozila[]> {
    this.httpClient.get<Kategorijavozila[]>(this.API_URL+'/'+id).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getKategorijavozilaByNaziv(naziv: string): Observable<Kategorijavozila[]> {
    this.httpClient.get<Kategorijavozila[]>(this.API_URL+'/filter/naziv/'+naziv).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addKategorijavozila(kategorijavozila: Kategorijavozila): void {
    this.httpClient.post(this.API_URL, kategorijavozila).subscribe();
  }
  public updateKategorijavozila(kategorijavozila: Kategorijavozila): void {
    this.httpClient.put(this.API_URL+'/'+kategorijavozila.id, kategorijavozila).subscribe();
  }
  public deleteKategorijavozila(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
