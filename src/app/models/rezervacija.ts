import { Kategorijausluga } from './kategorijausluga';
import { Korisnik } from './korisnik';
import { Vozilo } from './vozilo';

export class Rezervacija {
  id: number;
  kategorijausluga: Kategorijausluga;
  korisnikklijent: Korisnik;
  korisniksluzbenik: Korisnik;
  datumrezervacije: Date;
  datumpocetka: Date;
  datumzavrsetka: Date;
  depozit: number;
  vozilo: Vozilo;
}
