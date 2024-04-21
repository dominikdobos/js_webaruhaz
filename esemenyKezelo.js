import { kosarbaRakas, kosarAr, KOSAR } from "./adatKezelo.js";
import { kosarTetelTxt, megjelenit, uresKosarOldal } from "./fuggvenyek.js";

let jelenlegiOldal = 1;

export function kosarbaEsemeny(lista) {
  const KOSAR_GOMB = $(".kosar-gomb");
  KOSAR_GOMB.on("click", function (e) {
    kosarbaRakas(lista, e.target.id);
  });
}

export function oldalValtas() {
  const KOSAR_OLDAL = $(".kosarOldal");
  const ADMIN_OLDAL = $(".adminOldal");
  const TERMEK_OLDAL = $(".termekOldal");
  const ADATOK_OLDAL = $(".adatokOldal");

  TERMEK_OLDAL.on("click", function () {
    jelenlegiOldal = 1;
    oldalToggle(jelenlegiOldal);
  });
  KOSAR_OLDAL.on("click", function () {
    jelenlegiOldal = 2;
    if (KOSAR.length === 0) {
      megjelenit("#kosar-tarolo", uresKosarOldal());
      oldalToggle(jelenlegiOldal);
    } else {
      console.log("dxxd");
      megjelenit("#kosar-tarolo", kosarTetelTxt(KOSAR, kosarAr));
      oldalToggle(jelenlegiOldal);
    }
  });
  ADATOK_OLDAL.on("click", function () {
    jelenlegiOldal = 3;
  });
  ADMIN_OLDAL.on("click", function () {
    jelenlegiOldal = 4;
  });
}

function oldalToggle(jelenlegiOldal) {
  const KOSAR_MEGJELENITO = $(".kosar-valtozo");
  const TERMEK_MEGJELENITO = $(".termek-valtozo");
  const ADAT_MEGJELENITO = $(".adat-valtozo");
  const ADMIN_MEGJELENITO = $(".admin-valtozo");

  if (jelenlegiOldal === 1) {
    TERMEK_MEGJELENITO.removeClass("elrejt");
    KOSAR_MEGJELENITO.addClass("elrejt");
    ADAT_MEGJELENITO.addClass("elrejt");
    ADMIN_MEGJELENITO.addClass("elrejt");
  } else if (jelenlegiOldal === 2) {
    TERMEK_MEGJELENITO.addClass("elrejt");
    KOSAR_MEGJELENITO.removeClass("elrejt");
    ADAT_MEGJELENITO.addClass("elrejt");
    ADMIN_MEGJELENITO.addClass("elrejt");
  } else if (jelenlegiOldal === 3) {
    TERMEK_MEGJELENITO.addClass("elrejt");
    KOSAR_MEGJELENITO.addClass("elrejt");
    ADAT_MEGJELENITO.removeClass("elrejt");
    ADMIN_MEGJELENITO.addClass("elrejt");
  } else {
    TERMEK_MEGJELENITO.addClass("elrejt");
    KOSAR_MEGJELENITO.addClass("elrejt");
    ADAT_MEGJELENITO.addClass("elrejt");
    ADMIN_MEGJELENITO.removeClass("elrejt");
  }
}
