import { Component, OnInit, Inject } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { Vozilo } from 'src/app/models/vozilo';

import { KorisnikService } from 'src/app/services/korisnik.service';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VoziloService } from 'src/app/services/vozilo.service';
import { KategorijauslugaService } from 'src/app/services/kategorijausluga.service';
import { Rezervacija } from 'src/app/models/rezervacija';
import { RezervacijaService } from 'src/app/services/rezervacija.service';

@Component({
  selector: 'app-rezervacija-dialog',
  templateUrl: './rezervacija-dialog.component.html',
  styleUrls: ['./rezervacija-dialog.component.css']
})
export class RezervacijaDialogComponent implements OnInit {

  vozila: Vozilo[];
  klijenti: Korisnik[];
  sluzbenici: Korisnik[];
  kategorijeusluga: Kategorijausluga[];

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RezervacijaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Rezervacija,
              public rezervacijaService: RezervacijaService,
              public kategorijausluga: KategorijauslugaService,
              public klijent: KorisnikService,
              public sluzbenik: KorisnikService,
              public vozilo: VoziloService) { }

  ngOnInit() {
    this.kategorijausluga.getAllKategorijausluga().subscribe(kategorijeusluga =>
      this.kategorijeusluga=this.kategorijeusluga);

    this.klijent.getAllKorisnik().subscribe(klijenti =>
      this.klijenti=this.klijenti);

    this.sluzbenik.getAllKorisnik().subscribe(sluzbenici =>
      this.sluzbenici=this.sluzbenici);

    this.vozilo.getAllVozilo().subscribe(vozila =>
      this.vozila=this.vozila);
  }
  public compareTo(a,b){
    return a.id==b.id;
  }
  public add(): void {
    this.data.id=-1;
    this.rezervacijaService.addRezervacija(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.rezervacijaService.updateRezervacija(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.rezervacijaService.deleteRezervacija(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
