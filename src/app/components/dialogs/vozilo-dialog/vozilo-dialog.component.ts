import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { Kategorijavozila } from 'src/app/models/kategorijavozila';
import { Modelvozila } from 'src/app/models/modelvozila';
import { Tipvozila } from 'src/app/models/tipvozila';
import { Markavozila } from 'src/app/models/markavozila';
import { KategorijauslugaService } from 'src/app/services/kategorijausluga.service';
import { KategorijavozilaService } from 'src/app/services/kategorijavozila.service';
import { TipvozilaService } from 'src/app/services/tipvozila.service';
import { ModelvozilaService } from 'src/app/services/modelvozila.service';
import { MarkavozilaService } from 'src/app/services/markavozila.service';
import { VoziloService } from 'src/app/services/vozilo.service';
import { Vozilo } from 'src/app/models/vozilo';


@Component({
  selector: 'app-vozilo-dialog',
  templateUrl: './vozilo-dialog.component.html',
  styleUrls: ['./vozilo-dialog.component.css']
})
export class VoziloDialogComponent implements OnInit {
  kategorijeusluga: Kategorijausluga[];
  kategorijevozila: Kategorijavozila[];
  tipovivozila: Tipvozila[];
  markevozila: Markavozila[];
  modelivozila: Modelvozila[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<VoziloDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Vozilo,
              public voziloService: VoziloService,
              public kategorijausluga: KategorijauslugaService,
              public kategorijavozila: KategorijavozilaService,
              public tipvozila: TipvozilaService,
              public markavozila: MarkavozilaService,
              public modelvozila: ModelvozilaService) { }

  ngOnInit() {
    this.kategorijausluga.getAllKategorijausluga().subscribe(kategorijeusluga =>
      this.kategorijeusluga=kategorijeusluga);

    this.kategorijavozila.getAllKategorijavozila().subscribe(kategorijevozila =>
      this.kategorijevozila=kategorijevozila);

    this.tipvozila.getAllTipvozila().subscribe(tipovivozila =>
      this.tipovivozila=tipovivozila);

    this.markavozila.getAllMarkavozila().subscribe(markevozila =>
      this.markevozila=markevozila);

    this.modelvozila.getAllModelvozila().subscribe(modelivozila =>
      this.modelivozila=modelivozila);
  }
  public compareTo(a,b){
    return a.id==b.id;
  }
  public add(): void {
    this.data.id=-1;
    this.voziloService.addVozilo(this.data);
    this.snackBar.open("Uspešno dodata kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public update(): void {
    this.voziloService.updateVozilo(this.data);
    this.snackBar.open("Uspešno izmenjena kategorija usluga", "U redu", {
      duration: 2500
    });
  }
  public delete(): void {
    this.voziloService.deleteVozilo(this.data.id);
    this.snackBar.open("Uspešno obrisana kategorija usluga", "U redu");
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000
    });
  }


}
