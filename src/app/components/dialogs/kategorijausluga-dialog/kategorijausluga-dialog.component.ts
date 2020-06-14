import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { KategorijauslugaService } from 'src/app/services/kategorijausluga.service';

@Component({
  selector: 'app-kategorijausluga-dialog',
  templateUrl: './kategorijausluga-dialog.component.html',
  styleUrls: ['./kategorijausluga-dialog.component.css']
})
export class KategorijauslugaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<KategorijauslugaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Kategorijausluga,
              public kategorijauslugaService: KategorijauslugaService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.kategorijauslugaService.addKategorijausluga(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.kategorijauslugaService.updateKategorijausluga(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.kategorijauslugaService.deleteKategorijausluga(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
