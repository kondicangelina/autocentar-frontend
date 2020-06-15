import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Korisnikpl } from 'src/app/models/korisnikpl';
import { KorisnikplService } from 'src/app/services/korisnikpl.service';

@Component({
  selector: 'app-korisnikpl-dialog',
  templateUrl: './korisnikpl-dialog.component.html',
  styleUrls: ['./korisnikpl-dialog.component.css']
})
export class KorisnikplDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<KorisnikplDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Korisnikpl,
              public korisnikplService: KorisnikplService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.korisnikplService.addKorisnikpl(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.korisnikplService.updateKorisnikpl(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.korisnikplService.deleteKorisnikpl(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
