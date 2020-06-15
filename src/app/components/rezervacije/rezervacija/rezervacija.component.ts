import { Component, OnInit, ViewChild } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { MatPaginator, MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { RezervacijaService } from 'src/app/services/rezervacija.service';
import { Rezervacija } from 'src/app/models/rezervacija';
import { RezervacijaDialogComponent } from '../../dialogs/rezervacija-dialog/rezervacija-dialog.component';
import { Vozilo } from 'src/app/models/vozilo';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  displayedColumns = [ 'id', 'kategorijausluga' , 'korisnikklijent', 'korisniksluzbenik',  'datumrezervacije' , 'datumpocetka' , 'datumzavrsetka' , 'depozit' , 'vozilo' ,  'actions' ];

  dataSource: MatTableDataSource<Rezervacija>;
  selektovanaRezervacija: Rezervacija;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public rezervacijaService: RezervacijaService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  public loadData() {
    this.rezervacijaService.getAllRezervacija().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
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
    this.selektovanaRezervacija=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, usluga: Kategorijausluga, klijent: Korisnik, sluzbenik: Korisnik, rezervacija: string, pocetak: string, zavrsetak, depozit: number, vozilo: Vozilo) {
    const dialogRef = this.dialog.open(RezervacijaDialogComponent,
                                      { data: { id: id, kategorijausluga: usluga, korisnikklijent: klijent, korisniksluzbenik: sluzbenik, datumrezervacije: rezervacija, datumpocetka: pocetak, datumzavrsetka: zavrsetak, depozit: depozit, vozilo: vozilo } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }


}
