import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Korisnikpl } from 'src/app/models/korisnikpl';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { KorisnikplService } from 'src/app/services/korisnikpl.service';
import { Korisnik } from 'src/app/models/korisnik';

@Component({
  selector: 'app-korisnik-dialog',
  templateUrl: './korisnik-dialog.component.html',
  styleUrls: ['./korisnik-dialog.component.css']
})
export class KorisnikDialogComponent implements OnInit {

  korisnicipl: Korisnikpl[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<KorisnikDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Korisnik,
              public korisnikService:KorisnikService,
              public korisnikpl: KorisnikplService) { }

  ngOnInit() {
    this.korisnikpl.getAllKorisnikpl().subscribe(korisnicipl =>
      this.korisnicipl=this.korisnicipl);
  }
  public compareTo(a,b){
    return a.id==b.id;
  }
  public add(): void {
    this.data.id=-1;
    this.korisnikService.addKorisnik(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.korisnikService.updateKorisnik(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.korisnikService.deleteKorisnik(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
