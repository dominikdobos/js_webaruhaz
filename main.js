import { layoutLetrehoz, megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";
import {
  kosarbaEsemeny,
  oldalValtas,
  rendezEsemeny,
  szuresTipusra,
  torolEsemeny,
  termekHozzaad,
  felhHozzaad,
} from "./esemenyKezelo.js";
import { AUTOK } from "./adatok.js";

init(AUTOK);
oldalValtas();
szuresTipusra(AUTOK);
termekHozzaad(AUTOK);

export function init(lista) {
  let txt = layoutLetrehoz(lista);
  megjelenit("#termek-tarolo", txt);
  kosarbaEsemeny(lista);
  rendezEsemeny(lista);
  txt = tablazatLetrehoz(lista);
  megjelenit("#admin-tablazat", txt);
  torolEsemeny(lista);
}
