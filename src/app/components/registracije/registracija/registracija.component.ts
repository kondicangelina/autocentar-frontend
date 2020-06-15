import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistracijaDialogComponent } from '../../dialogs/registracija-dialog/registracija-dialog.component';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { Korisnik } from 'src/app/models/korisnik';
import { Vozilo } from 'src/app/models/vozilo';
import { Registracija } from 'src/app/models/registracija';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { RegistracijaService } from 'src/app/services/registracija.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  displayedColumns = [ 'id', 'kategorijausluga' , 'brojtablica' , 'datumregistracije', 'korisnikklijent', 'korisniksluzbenik', 'vozilo' ,  'actions' ];

  dataSource: MatTableDataSource<Registracija>;
  selektovanaRegistracija: Registracija;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public registracijaService: RegistracijaService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  public loadData() {
    this.registracijaService.getAllRegistracija().subscribe(data=> {
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
    this.selektovanaRegistracija=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, usluga: Kategorijausluga, tablice: string, datum: string, klijent: Korisnik, sluzbenik: Korisnik, vozilo: Vozilo) {
    const dialogRef = this.dialog.open(RegistracijaDialogComponent,
                      { data: { id: id, kategorijausluga: usluga, brojtablica: tablice, datumregistracije: datum, korisnikklijent: klijent, korisniksluzbenik: sluzbenik, vozilo: vozilo } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
