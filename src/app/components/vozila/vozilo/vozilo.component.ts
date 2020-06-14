import { Component, OnInit, ViewChild } from '@angular/core';
import { VoziloDialogComponent } from '../../dialogs/vozilo-dialog/vozilo-dialog.component';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { Vozilo } from 'src/app/models/vozilo';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { Kategorijavozila } from 'src/app/models/kategorijavozila';
import { Modelvozila } from 'src/app/models/modelvozila';
import { Tipvozila } from 'src/app/models/tipvozila';
import { Markavozila } from 'src/app/models/markavozila';
import { VoziloService } from 'src/app/services/vozilo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vozilo',
  templateUrl: './vozilo.component.html',
  styleUrls: ['./vozilo.component.css']
})
export class VoziloComponent implements OnInit {

  displayedColumns = ['id', 'kategorijausluga', 'brojsasije',
    'brojmotora', 'pogonvozila', 'godiste', 'brojvrata', 'brojmesta',
    'vrstagoriva', 'boja', 'kw_ks', 'zelenikarton', 'kategorijavozila',
    'tipvozila', 'markavozila', 'modelvozila', 'cenavozila', 'oprema', 'slika', 'actions'];

  dataSource: MatTableDataSource<Vozilo>;
  selektovanoVozilo:Vozilo;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(public httpClient: HttpClient,
              public voziloService: VoziloService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  public loadData() {
    this.voziloService.getAllVozilo().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor=(data, property)=> {
        switch(property) {
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };

      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  selectRow(row) {
    this.selektovanoVozilo=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, kategorijausluga: Kategorijausluga, brojsasije: string,
    brojmotora: string, pogonvozila: string, godiste: number, brojvrata: string, brojmesta: number,
    vrstagoriva: string, boja: string, kw_ks: string, zelenikarton: boolean, kategorijavozila: Kategorijavozila,
    tipvozila: Tipvozila, markavozila: Markavozila, modelvozila: Modelvozila, cenavozila: number, oprema: string, slika: Blob) {
    const dialogRef = this.dialog.open(VoziloDialogComponent,
                      { data: { id: id, kategorijausluga: kategorijausluga, brojsasije: brojsasije,
                        brojmotora: brojmotora, pogonvozila: pogonvozila, godiste: godiste, brojvrata: brojvrata, brojmesta: brojmesta,
                        vrstagoriva: vrstagoriva, boja: boja, kw_ks: kw_ks, zelenikarton: zelenikarton, kategorijavozila: kategorijavozila,
                        tipvozila: tipvozila, markavozila: markavozila, modelvozila: modelvozila, cenavozila: cenavozila, oprema:oprema, slika: slika } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
