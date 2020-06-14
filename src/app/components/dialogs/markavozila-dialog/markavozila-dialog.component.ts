import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Markavozila } from 'src/app/models/markavozila';
import { MarkavozilaService } from 'src/app/services/markavozila.service';

@Component({
  selector: 'app-markavozila-dialog',
  templateUrl: './markavozila-dialog.component.html',
  styleUrls: ['./markavozila-dialog.component.css']
})
export class MarkavozilaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<MarkavozilaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Markavozila,
              public markavozilaService: MarkavozilaService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.markavozilaService.addMarkavozila(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.markavozilaService.updateMarkavozila(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.markavozilaService.deleteMarkavozila(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
