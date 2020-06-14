import { Component, OnInit, Inject } from '@angular/core';
import { Kategorijavozila } from 'src/app/models/kategorijavozila';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { KategorijavozilaService } from 'src/app/services/kategorijavozila.service';

@Component({
  selector: 'app-kategorijavozila-dialog',
  templateUrl: './kategorijavozila-dialog.component.html',
  styleUrls: ['./kategorijavozila-dialog.component.css']
})
export class KategorijavozilaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<KategorijavozilaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Kategorijavozila,
              public kategorijavozilaService: KategorijavozilaService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.kategorijavozilaService.addKategorijavozila(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.kategorijavozilaService.updateKategorijavozila(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.kategorijavozilaService.deleteKategorijavozila(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }
}
