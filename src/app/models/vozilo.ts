import { Kategorijausluga } from './kategorijausluga';
import { Kategorijavozila } from './kategorijavozila';
import { Tipvozila } from './tipvozila';
import { Markavozila } from './markavozila';
import { Modelvozila } from './modelvozila';

export class Vozilo {
  id: number;
  kategorijausluga: Kategorijausluga;
  brojsasije: string;
  brojmotora: string;
  pogonvozila: string;
  godiste: number;
  brojvrata: string;
  brojmesta: number;
  vrstagoriva: string;
  boja: string;
  kw_ks: string;
  zelenikarton: boolean;
  kategorijavozila: Kategorijavozila;
  tipvozila: Tipvozila;
  markavozila: Markavozila;
  modelvozila: Modelvozila;
  cenavozila: number;
  oprema: string;
  slika: Blob;
}
