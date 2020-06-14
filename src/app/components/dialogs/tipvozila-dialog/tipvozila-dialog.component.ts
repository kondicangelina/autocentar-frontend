import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Tipvozila } from 'src/app/models/tipvozila';
import { TipvozilaService } from 'src/app/services/tipvozila.service';

@Component({
  selector: 'app-tipvozila-dialog',
  templateUrl: './tipvozila-dialog.component.html',
  styleUrls: ['./tipvozila-dialog.component.css']
})
export class TipvozilaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<TipvozilaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tipvozila,
              public tipvozilaService: TipvozilaService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.tipvozilaService.addTipvozila(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.tipvozilaService.updateTipvozila(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.tipvozilaService.deleteTipvozila(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
