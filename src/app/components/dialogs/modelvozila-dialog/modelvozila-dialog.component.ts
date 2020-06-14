import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ModelvozilaService } from 'src/app/services/modelvozila.service';
import { Modelvozila } from 'src/app/models/modelvozila';

@Component({
  selector: 'app-modelvozila-dialog',
  templateUrl: './modelvozila-dialog.component.html',
  styleUrls: ['./modelvozila-dialog.component.css']
})
export class ModelvozilaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ModelvozilaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Modelvozila,
              public tipvozilaService: ModelvozilaService) { }

  ngOnInit() {
  }
  public add(): void {
    this.data.id=-1;
    this.tipvozilaService.addModelvozila(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.tipvozilaService.updateModelvozila(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.tipvozilaService.deleteModelvozila(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }

}
