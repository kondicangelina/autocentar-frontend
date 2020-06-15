import { Component, OnInit, ViewChild } from '@angular/core';
import { Cenovnik } from 'src/app/models/cenovnik';
import { Korisnik } from 'src/app/models/korisnik';
import { Registracija } from 'src/app/models/registracija';
import { Rezervacija } from 'src/app/models/rezervacija';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { NaplataDialogComponent } from '../../dialogs/naplata-dialog/naplata-dialog.component';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { NaplataService } from 'src/app/services/naplata.service';
import { HttpClient } from '@angular/common/http';
import { Naplata } from 'src/app/models/naplata';

@Component({
  selector: 'app-naplata',
  templateUrl: './naplata.component.html',
  styleUrls: ['./naplata.component.css']
})
export class NaplataComponent implements OnInit {

  displayedColumns = [ 'id', 'kategorijausluga' , 'datumnaplate' , 'rezervacija', 'registacija', 'korisnikklijent' , 'korisniksluzbenik', 'cenovnik' , 'ukupno' , 'napomena' ,  'actions' ];

  dataSource: MatTableDataSource<Naplata>;
  selektovanaNaplata: Naplata;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public naplataService: NaplataService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  public loadData() {
    this.naplataService.getAllNaplata().subscribe(data=> {
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
    this.selektovanaNaplata=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, usluga: Kategorijausluga, datum: string, rezervacija: Rezervacija, registracija: Registracija, klijent: Korisnik, sluzbenik: Korisnik, cenovnik: Cenovnik, ukupno:number, napomena: string) {
    const dialogRef = this.dialog.open(NaplataDialogComponent,
                      { data: { id: id, kategorijausluga: usluga, datumnaplate: datum, rezervacija: rezervacija, registracija: registracija, korisnikklijent: klijent, korisniksluzbenik: sluzbenik, cenovnik: cenovnik, ukupno: ukupno, napomena: napomena } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }


}
