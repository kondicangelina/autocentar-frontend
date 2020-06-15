import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Korisnikpl } from 'src/app/models/korisnikpl';
import { KorisnikplService } from 'src/app/services/korisnikpl.service';
import { KorisnikplDialogComponent } from '../../dialogs/korisnikpl-dialog/korisnikpl-dialog.component';

@Component({
  selector: 'app-korisnikpl',
  templateUrl: './korisnikpl.component.html',
  styleUrls: ['./korisnikpl.component.css']
})
export class KorisnikplComponent implements OnInit {
  displayedColumns = [ 'id', 'nazivpl', 'adresasedista', 'pib', 'actions' ];

  dataSource: MatTableDataSource<Korisnikpl>;
  selektovanKorisnikpl: Korisnikpl;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public korisnikplService: KorisnikplService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.korisnikplService.getAllKorisnikpl().subscribe(data=> {
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
    this.selektovanKorisnikpl=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, naziv: string, adresa: string, pib: string) {
    const dialogRef = this.dialog.open(KorisnikplDialogComponent,
                      { data: { id: id, nazivpl: naziv, adresasedista: adresa, pib: pib } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
