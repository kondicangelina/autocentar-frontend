import { Component, OnInit, Inject } from '@angular/core';
import { Registracija } from 'src/app/models/registracija';
import { Cenovnik } from 'src/app/models/cenovnik';
import { Korisnik } from 'src/app/models/korisnik';
import { Rezervacija } from 'src/app/models/rezervacija';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NaplataService } from 'src/app/services/naplata.service';
import { KategorijauslugaService } from 'src/app/services/kategorijausluga.service';
import { CenovnikService } from 'src/app/services/cenovnik.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { Naplata } from 'src/app/models/naplata';
import { RegistracijaService } from 'src/app/services/registracija.service';
import { RezervacijaService } from 'src/app/services/rezervacija.service';

@Component({
  selector: 'app-naplata-dialog',
  templateUrl: './naplata-dialog.component.html',
  styleUrls: ['./naplata-dialog.component.css']
})
export class NaplataDialogComponent implements OnInit {

  cenovnici: Cenovnik[];
  klijenti: Korisnik[];
  sluzbenici: Korisnik[];
  kategorijeusluga: Kategorijausluga[];
  registracije: Registracija[];
  rezervacije: Rezervacija[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NaplataDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Naplata,
              public naplataService: NaplataService,
              public kategorijausluga: KategorijauslugaService,
              public klijent: KorisnikService,
              public sluzbenik: KorisnikService,
              public cenovnik: CenovnikService,
              public rezervacija: RezervacijaService,
              public registracija: RegistracijaService) { }

  ngOnInit() {
    this.kategorijausluga.getAllKategorijausluga().subscribe(kategorijeusluga =>
      this.kategorijeusluga=this.kategorijeusluga);

    this.rezervacija.getAllRezervacija().subscribe(rezervacije =>
      this.rezervacije=this.rezervacije);

    this.registracija.getAllRegistracija().subscribe(registracije =>
      this.registracije=this.registracije);

    this.klijent.getAllKorisnik().subscribe(klijenti =>
      this.klijenti=this.klijenti);

    this.sluzbenik.getAllKorisnik().subscribe(sluzbenici =>
      this.sluzbenici=this.sluzbenici);

    this.cenovnik.getAllCenovnik().subscribe(cenovnici =>
      this.cenovnici=this.cenovnici);
  }
  public compareTo(a,b){
    return a.id==b.id;
  }
  public add(): void {
    this.data.id=-1;
    this.naplataService.addNaplata(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.naplataService.updateNaplata(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.naplataService.deleteNaplata(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }


}
