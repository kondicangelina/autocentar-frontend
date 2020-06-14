import { Kategorijausluga } from './kategorijausluga';
import { Korisnik } from './korisnik';
import { Vozilo } from './vozilo';

export class Registracija {
  id: number;
  kategorijausluga: Kategorijausluga;
  brojtablica: string;
  datumregistracije: Date;
  korisnikklijent: Korisnik;
  korisniksluzbenik: Korisnik;
  vozilo: Vozilo;
}
