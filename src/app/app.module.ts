import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatSidenavModule,
        MatExpansionModule,
        MatOptionModule,
        MatInputModule,
        MatToolbarModule,
        MatTableModule,
        MatSelectModule,
        MatSnackBarModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KategorijauslugaComponent } from './components/usluge/kategorijausluga/kategorijausluga.component';
import { KorisnikplComponent } from './components/korisnici/korisnikpl/korisnikpl.component';
import { KorisnikComponent } from './components/korisnici/korisnik/korisnik.component';
import { TipvozilaComponent } from './components/vozila/tipvozila/tipvozila.component';
import { MarkavozilaComponent } from './components/vozila/markavozila/markavozila.component';
import { ModelvozilaComponent } from './components/vozila/modelvozila/modelvozila.component';
import { KategorijavozilaComponent } from './components/vozila/kategorijavozila/kategorijavozila.component';
import { VoziloComponent } from './components/vozila/vozilo/vozilo.component';
import { OsiguranjeComponent } from './components/vozila/osiguranje/osiguranje.component';
import { RegistracijaComponent } from './components/registracije/registracija/registracija.component';
import { RezervacijaComponent } from './components/rezervacije/rezervacija/rezervacija.component';
import { CenovnikComponent } from './components/naplate/cenovnik/cenovnik.component';
import { NaplataComponent } from './components/naplate/naplata/naplata.component';
import { HomeComponent } from './components/core/home/home.component';
import { KategorijauslugaService } from './services/kategorijausluga.service';
import { KorisnikplService } from './services/korisnikpl.service';
import { KorisnikService } from './services/korisnik.service';
import { TipvozilaService } from './services/tipvozila.service';
import { MarkavozilaService } from './services/markavozila.service';
import { ModelvozilaService } from './services/modelvozila.service';
import { KategorijavozilaService } from './services/kategorijavozila.service';
import { VoziloService } from './services/vozilo.service';
import { OsiguranjeService } from './services/osiguranje.service';
import { RegistracijaService } from './services/registracija.service';
import { RezervacijaService } from './services/rezervacija.service';
import { CenovnikService } from './services/cenovnik.service';
import { NaplataService } from './services/naplata.service';
import { KategorijauslugaDialogComponent } from './components/dialogs/kategorijausluga-dialog/kategorijausluga-dialog.component';
import { KorisnikplDialogComponent } from './components/dialogs/korisnikpl-dialog/korisnikpl-dialog.component';
import { KorisnikDialogComponent } from './components/dialogs/korisnik-dialog/korisnik-dialog.component';
import { TipvozilaDialogComponent } from './components/dialogs/tipvozila-dialog/tipvozila-dialog.component';
import { MarkavozilaDialogComponent } from './components/dialogs/markavozila-dialog/markavozila-dialog.component';
import { ModelvozilaDialogComponent } from './components/dialogs/modelvozila-dialog/modelvozila-dialog.component';
import { KategorijavozilaDialogComponent } from './components/dialogs/kategorijavozila-dialog/kategorijavozila-dialog.component';
import { VoziloDialogComponent } from './components/dialogs/vozilo-dialog/vozilo-dialog.component';
import { OsiguranjeDialogComponent } from './components/dialogs/osiguranje-dialog/osiguranje-dialog.component';
import { RegistracijaDialogComponent } from './components/dialogs/registracija-dialog/registracija-dialog.component';
import { RezervacijaDialogComponent } from './components/dialogs/rezervacija-dialog/rezervacija-dialog.component';
import { CenovnikDialogComponent } from './components/dialogs/cenovnik-dialog/cenovnik-dialog.component';
import { NaplataDialogComponent } from './components/dialogs/naplata-dialog/naplata-dialog.component';

const Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kategorijausluga', component: KategorijauslugaComponent },
  { path: 'korisnikpl', component: KorisnikplComponent },
  { path: 'korisnik', component: KorisnikComponent },
  { path: 'kategorijavozila', component: KategorijavozilaComponent },
  { path: 'markavozila', component: MarkavozilaComponent },
  { path: 'modelvozila', component: ModelvozilaComponent },
  { path: 'tipvozila', component: TipvozilaComponent },
  { path: 'vozilo', component: VoziloComponent },
  { path: 'osiguranje', component: OsiguranjeComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'rezervacija', component: RezervacijaComponent },
  { path: 'cenovnik', component: CenovnikComponent },
  { path: 'naplata', component: NaplataComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    KategorijauslugaComponent,
    KorisnikplComponent,
    KorisnikComponent,
    TipvozilaComponent,
    MarkavozilaComponent,
    ModelvozilaComponent,
    KategorijavozilaComponent,
    VoziloComponent,
    OsiguranjeComponent,
    RegistracijaComponent,
    RezervacijaComponent,
    CenovnikComponent,
    NaplataComponent,
    HomeComponent,
    KategorijauslugaDialogComponent,
    KorisnikplDialogComponent,
    KorisnikDialogComponent,
    TipvozilaDialogComponent,
    MarkavozilaDialogComponent,
    ModelvozilaDialogComponent,
    KategorijavozilaDialogComponent,
    VoziloDialogComponent,
    OsiguranjeDialogComponent,
    RegistracijaDialogComponent,
    RezervacijaDialogComponent,
    CenovnikDialogComponent,
    NaplataDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatOptionModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  entryComponents: [
    KategorijauslugaDialogComponent,
    KorisnikplDialogComponent,
    KorisnikDialogComponent,
    TipvozilaDialogComponent,
    MarkavozilaDialogComponent,
    ModelvozilaDialogComponent,
    KategorijavozilaDialogComponent,
    VoziloDialogComponent,
    OsiguranjeDialogComponent,
    RegistracijaDialogComponent,
    RezervacijaDialogComponent,
    CenovnikDialogComponent,
    NaplataDialogComponent
  ],
  providers: [KategorijauslugaService,
    KorisnikplService,
    KorisnikService,
    TipvozilaService,
    MarkavozilaService,
    ModelvozilaService,
    KategorijavozilaService,
    VoziloService,
    OsiguranjeService,
    RegistracijaService,
    RezervacijaService,
    CenovnikService,
    NaplataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
