import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TipvozilaDialogComponent } from '../../dialogs/tipvozila-dialog/tipvozila-dialog.component';
import { Tipvozila } from 'src/app/models/tipvozila';
import { TipvozilaService } from 'src/app/services/tipvozila.service';

@Component({
  selector: 'app-tipvozila',
  templateUrl: './tipvozila.component.html',
  styleUrls: ['./tipvozila.component.css']
})
export class TipvozilaComponent implements OnInit {

  displayedColumns = ['id', 'nazivtipavozila', 'actions'];

  dataSource: MatTableDataSource<Tipvozila>;
  selektovanaKategorijausluga:Tipvozila;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public kategorijauslugaService: TipvozilaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.kategorijauslugaService.getAllTipvozila().subscribe(data=> {
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
    const dialogRef = this.dialog.open(TipvozilaDialogComponent,
                      { data: { id: id, nazivtipavozila: naziv } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }
}
