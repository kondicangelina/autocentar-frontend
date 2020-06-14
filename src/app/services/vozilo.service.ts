import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Vozilo } from '../models/vozilo';
@Injectable({
  providedIn: 'root'
})
export class VoziloService {

  private readonly API_URL = 'http://localhost:8081/autocentar/api/vozilo';
  dataChange: BehaviorSubject<Vozilo[]>=new BehaviorSubject<Vozilo[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllVozilo(): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloById(id: number): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/'+id).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByBoja(boja: string): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/boja/'+boja).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByBrojmesta(brojmesta: number): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/brojmesta/'+brojmesta).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByGodiste(godiste: number): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/godiste/'+godiste).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByKategorija(kategorija: string): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/kategorija/'+kategorija).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByMarka(marka: string): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/marka/'+marka).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByModel(model: string): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/model/'+model).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByTip(tip: string): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/tip/'+tip).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public getVoziloByUsluga(usluga: string): Observable<Vozilo[]> {
    this.httpClient.get<Vozilo[]>(this.API_URL+'/filter/usluga/'+usluga).subscribe(data=> {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=> {
      console.log(error.name+' '+error.message);
    });
    return this.dataChange.asObservable();
  }
  public addVozilo(vozilo: Vozilo): void {
    this.httpClient.post(this.API_URL, vozilo).subscribe();
  }
  public updateVozilo(vozilo: Vozilo): void {
    this.httpClient.put(this.API_URL+'/'+vozilo.id,vozilo).subscribe();
  }
  public deleteVozilo(id: number): void {
    this.httpClient.delete(this.API_URL+'/'+id).subscribe();
  }
}
