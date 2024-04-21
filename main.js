import { layoutLetrehoz, megjelenit, uresKosarOldal } from "./fuggvenyek.js";
import { kosarbaEsemeny, oldalValtas } from "./esemenyKezelo.js";
import { KOSAR } from "./adatKezelo.js";
import { AUTOK } from "./adatok.js";

init(AUTOK);
oldalValtas();

function init(lista) {
  let txt = layoutLetrehoz(lista);
  megjelenit("#termek-tarolo", txt);
  kosarbaEsemeny(lista);
}
