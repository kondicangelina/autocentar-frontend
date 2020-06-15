import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { CenovnikService } from 'src/app/services/cenovnik.service';
import { Cenovnik } from 'src/app/models/cenovnik';

@Component({
  selector: 'app-cenovnik-dialog',
  templateUrl: './cenovnik-dialog.component.html',
  styleUrls: ['./cenovnik-dialog.component.css']
})
export class CenovnikDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<CenovnikDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Cenovnik,
              public cenovnikService: CenovnikService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.cenovnikService.addCenovnik(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.cenovnikService.updateCenovnik(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.cenovnikService.deleteCenovnik(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
