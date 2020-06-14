import { Component, OnInit, ViewChild } from '@angular/core';
import { KategorijavozilaDialogComponent } from '../../dialogs/kategorijavozila-dialog/kategorijavozila-dialog.component';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { KategorijavozilaService } from 'src/app/services/kategorijavozila.service';
import { HttpClient } from '@angular/common/http';
import { Kategorijavozila } from 'src/app/models/kategorijavozila';

@Component({
  selector: 'app-kategorijavozila',
  templateUrl: './kategorijavozila.component.html',
  styleUrls: ['./kategorijavozila.component.css']
})
export class KategorijavozilaComponent implements OnInit {

  displayedColumns = ['id', 'nazivkategorijevozila', 'actions'];

  dataSource: MatTableDataSource<Kategorijavozila>;
  selektovanaKategorijavozila:Kategorijavozila;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public kategorijavozilaService: KategorijavozilaService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  public loadData() {
    this.kategorijavozilaService.getAllKategorijavozila().subscribe(data=> {
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
    this.selektovanaKategorijavozila=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, naziv: string) {
    const dialogRef = this.dialog.open(KategorijavozilaDialogComponent,
                      { data: { id: id, nazivkategorijevozila: naziv } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
