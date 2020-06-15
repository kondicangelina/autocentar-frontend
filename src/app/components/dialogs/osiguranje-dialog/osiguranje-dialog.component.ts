import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { VoziloService } from 'src/app/services/vozilo.service';
import { OsiguranjeService } from 'src/app/services/osiguranje.service';
import { Vozilo } from 'src/app/models/vozilo';
import { Osiguranje } from 'src/app/models/osiguranje';

@Component({
  selector: 'app-osiguranje-dialog',
  templateUrl: './osiguranje-dialog.component.html',
  styleUrls: ['./osiguranje-dialog.component.css']
})
export class OsiguranjeDialogComponent implements OnInit {

  vozila: Vozilo[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<OsiguranjeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Osiguranje,
              public osiguranjeService: OsiguranjeService,
              public vozilo: VoziloService) { }

  ngOnInit() {
    this.vozilo.getAllVozilo().subscribe(vozila =>
      this.vozila=this.vozila);
  }
  public compareTo(a,b){
    return a.id==b.id;
  }
  public add(): void {
    this.data.id=-1;
    this.osiguranjeService.addOsiguranje(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.osiguranjeService.updateOsiguranje(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.osiguranjeService.deleteOsiguranje(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }
}
