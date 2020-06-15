import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CenovnikDialogComponent } from '../../dialogs/cenovnik-dialog/cenovnik-dialog.component';
import { CenovnikService } from 'src/app/services/cenovnik.service';
import { Cenovnik } from 'src/app/models/cenovnik';


@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css']
})
export class CenovnikComponent implements OnInit {

  displayedColumns = [ 'id', 'nazivusluge', 'cenausluge', 'actions' ];

  dataSource: MatTableDataSource<Cenovnik>;
  selektovanCenovnik:Cenovnik;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public cenovnikService: CenovnikService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.cenovnikService.getAllCenovnik().subscribe(data=> {
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
    this.selektovanCenovnik=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, naziv: string, cena: number) {
    const dialogRef = this.dialog.open(CenovnikDialogComponent,
                      { data: { id: id, nazivusluge: naziv, cenausluge: cena } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
