import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ModelvozilaDialogComponent } from '../../dialogs/modelvozila-dialog/modelvozila-dialog.component';
import { Modelvozila } from 'src/app/models/modelvozila';
import { ModelvozilaService } from 'src/app/services/modelvozila.service';

@Component({
  selector: 'app-modelvozila',
  templateUrl: './modelvozila.component.html',
  styleUrls: ['./modelvozila.component.css']
})
export class ModelvozilaComponent implements OnInit {

  displayedColumns = ['id', 'nazivmodelavozila', 'actions'];

  dataSource: MatTableDataSource<Modelvozila>;
  selektovanModelvozila:Modelvozila;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public modelvozilaService: ModelvozilaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.modelvozilaService.getAllModelvozila().subscribe(data=> {
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
    this.selektovanModelvozila=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, naziv: string) {
    const dialogRef = this.dialog.open(ModelvozilaDialogComponent,
                      { data: { id: id, nazivmodelavozila: naziv } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }
}
