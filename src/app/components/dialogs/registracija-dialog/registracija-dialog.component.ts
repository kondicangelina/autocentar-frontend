import { Component, OnInit, Inject } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { Vozilo } from 'src/app/models/vozilo';

import { KorisnikService } from 'src/app/services/korisnik.service';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VoziloService } from 'src/app/services/vozilo.service';
import { KategorijauslugaService } from 'src/app/services/kategorijausluga.service';
import { RegistracijaService } from 'src/app/services/registracija.service';
import { Registracija } from 'src/app/models/registracija';

@Component({
  selector: 'app-registracija-dialog',
  templateUrl: './registracija-dialog.component.html',
  styleUrls: ['./registracija-dialog.component.css']
})
export class RegistracijaDialogComponent implements OnInit {
  vozila: Vozilo[];
  klijenti: Korisnik[];
  sluzbenici: Korisnik[];
  kategorijeusluga: Kategorijausluga[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RegistracijaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Registracija,
              public registracijaService: RegistracijaService,
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
    this.registracijaService.addRegistracija(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.registracijaService.updateRegistracija(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.registracijaService.deleteRegistracija(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
