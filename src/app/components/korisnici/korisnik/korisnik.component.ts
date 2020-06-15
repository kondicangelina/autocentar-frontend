import { Component, OnInit, ViewChild } from '@angular/core';
import { Korisnikpl } from 'src/app/models/korisnikpl';
import { KorisnikDialogComponent } from '../../dialogs/korisnik-dialog/korisnik-dialog.component';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Korisnik } from 'src/app/models/korisnik';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  displayedColumns = [ 'id', 'imekorisnika' , 'prezimekorisnika' ,
                      'jmbgkorisnika' , 'adresakorisnika' , 'korisnickoime' ,
                      'uloga' , 'pravnolice' , 'korisnikpl' , 'lozinka', 'actions' ];

  dataSource: MatTableDataSource<Korisnik>;
  selektovanKorisnik:Korisnik;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(public httpClient: HttpClient,
              public korisnikService: KorisnikService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  public loadData() {
    this.korisnikService.getAllKorisnik().subscribe(data=> {
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
    this.selektovanKorisnik=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, ime: string,
                    prezime: string, jmbg: string, adresa: string, korisnikcoime: string, uloga: number,
                    pravnolice: boolean, korisnikpl: Korisnikpl, lozinka: string) {
    const dialogRef = this.dialog.open(KorisnikDialogComponent,
                      { data: { id: id, imkorisnika: ime, prezimekorisnika: prezime, jmbgkorisnika: jmbg, adresakorisnika: adresa, korisnikcoime: korisnikcoime, uloga: uloga,
                        pravnolice: pravnolice, korisnikpl: Korisnikpl, lozinka: lozinka  } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
