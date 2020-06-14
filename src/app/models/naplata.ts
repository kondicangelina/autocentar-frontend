import { Kategorijausluga } from './kategorijausluga';
import { Rezervacija } from './rezervacija';
import { Registracija } from './registracija';
import { Korisnik } from './korisnik';
import { Cenovnik } from './cenovnik';

export class Naplata {
  id: number;
  kategorijausluga: Kategorijausluga;
  datumnaplate: Date;
  rezervacija: Rezervacija;
  registracija: Registracija;
  korisnikklijent: Korisnik;
  korisniksluzbenik: Korisnik;
  cenovnik: Cenovnik;
  ukupno: number;
  napomena: string;
}
