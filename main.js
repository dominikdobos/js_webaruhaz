import { layoutLetrehoz, megjelenit } from "./fuggvenyek.js";
import { AUTOK } from "./adatok.js";

init(AUTOK);

function init(lista) {
  let txt = layoutLetrehoz(lista);
  megjelenit("#termek-tarolo", txt);
}

console.log("main");
