import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Kategorijausluga } from 'src/app/models/kategorijausluga';
import { KategorijauslugaService } from 'src/app/services/kategorijausluga.service';
import { KategorijauslugaDialogComponent } from 'src/app/components/dialogs/kategorijausluga-dialog/kategorijausluga-dialog.component';


@Component({
  selector: 'app-kategorijausluga',
  templateUrl: './kategorijausluga.component.html',
  styleUrls: ['./kategorijausluga.component.css']
})
export class KategorijauslugaComponent implements OnInit {

  displayedColumns = ['id', 'nazivkategorijeusluge', 'actions'];

  dataSource: MatTableDataSource<Kategorijausluga>;
  selektovanaKategorijausluga: Kategorijausluga;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public kategorijauslugaService: KategorijauslugaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.kategorijauslugaService.getAllKategorijausluga().subscribe(data=> {
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
    this.selektovanaKategorijausluga=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, naziv: string) {
    const dialogRef = this.dialog.open(KategorijauslugaDialogComponent,
                      { data: { id: id, nazivkategorijeusluge: naziv } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
