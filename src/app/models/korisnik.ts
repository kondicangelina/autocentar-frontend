import { Korisnikpl } from './korisnikpl';

export class Korisnik {
  id: number;
  imekorisnika: string;
  prezimekorisnika: string;
  jmbgkorisnika: string;
  adresakorisnika: string;
  korisnickoime: string;
  uloga: number;
  pravnolice: boolean;
  korisnikpl: Korisnikpl;
  lozinka: string;
}
