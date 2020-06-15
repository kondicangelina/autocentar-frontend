import { Component, OnInit, ViewChild } from '@angular/core';
import { Osiguranje } from 'src/app/models/osiguranje';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { OsiguranjeService } from 'src/app/services/osiguranje.service';
import { OsiguranjeDialogComponent } from '../../dialogs/osiguranje-dialog/osiguranje-dialog.component';
import { Vozilo } from 'src/app/models/vozilo';

@Component({
  selector: 'app-osiguranje',
  templateUrl: './osiguranje.component.html',
  styleUrls: ['./osiguranje.component.css']
})
export class OsiguranjeComponent implements OnInit {

  displayedColumns = [ 'id', 'brojpolise' , 'tiposiguranja' , 'vozilo' ,  'actions' ];

  dataSource: MatTableDataSource<Osiguranje>;
  selektovanoOsiguranje: Osiguranje;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public osiguranjeService: OsiguranjeService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  public loadData() {
    this.osiguranjeService.getAllOsiguranje().subscribe(data=> {
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
    this.selektovanoOsiguranje=row;
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public openDialog(flag: number, id: number, polisa: string, tip: string, vozilo: Vozilo) {
    const dialogRef = this.dialog.open(OsiguranjeDialogComponent,
                      { data: { id: id, brojpolise: polisa, tiposiguranja: tip, vozilo: vozilo } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe( result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }


}
