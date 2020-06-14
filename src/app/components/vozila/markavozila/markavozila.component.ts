import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Markavozila } from 'src/app/models/markavozila';
import { HttpClient } from '@angular/common/http';
import { MarkavozilaService } from 'src/app/services/markavozila.service';
import { MarkavozilaDialogComponent } from '../../dialogs/markavozila-dialog/markavozila-dialog.component';

@Component({
  selector: 'app-markavozila',
  templateUrl: './markavozila.component.html',
  styleUrls: ['./markavozila.component.css']
})
export class MarkavozilaComponent implements OnInit {

  displayedColumns = ['id', 'nazivmarkevozila', 'actions'];

  dataSource: MatTableDataSource<Markavozila>;
  selektovanaMarkavozila:Markavozila;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public markavozilaService: MarkavozilaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.markavozilaService.getAllMarkavozila().subscribe(data=> {
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
    this.selektovanaMarkavozila=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, naziv: string) {
    const dialogRef = this.dialog.open(MarkavozilaDialogComponent,
                      { data: { id: id, nazivmarkevozila: naziv } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
