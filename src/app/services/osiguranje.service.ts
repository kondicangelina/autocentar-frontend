import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Osiguranje } from '../models/osiguranje';

@Injectable({
  providedIn: 'root'
})
export class OsiguranjeService {

  private readonly API_URL='http://localhost:8081/autocentar/api/vozilo/osiguranje';
  dataChange: BehaviorSubject<Osiguranje[]>=new BehaviorSubject<Osiguranje[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllOsiguranje(): Observable<Osiguranje[]> {
    this.httpClient.get<Osiguranje[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getOsiguranjeById(id: number): Observable<Osiguranje[]> {
    this.httpClient.get<Osiguranje[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getOsiguranjeByBrojpolise(polisa: number): Observable<Osiguranje[]> {
    this.httpClient.get<Osiguranje[]>(this.API_URL+'/filter/brojpolise/'+polisa).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getOsiguranjeByVozilo(vozilo: number): Observable<Osiguranje[]> {
    this.httpClient.get<Osiguranje[]>(this.API_URL+'/filter/vozilo/'+vozilo).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addOsiguranje(osiguranje: Osiguranje): void {
    this.httpClient.post(this.API_URL, osiguranje).subscribe();
  }
  public updateOsiguranje(osiguranje: Osiguranje): void {
    this.httpClient.put(this.API_URL+'/'+osiguranje.id, osiguranje).subscribe();
  }
  public deleteOsiguranje(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
