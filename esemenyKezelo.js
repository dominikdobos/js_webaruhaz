import {
  kosarbaRakas,
  KOSAR,
  termekTorlesKosarbol,
  kosarAr,
  novekvoRendez,
  csokkenoRendez,
  szures,
  termekTorles,
} from "./adatKezelo.js";
import {
  kosarTetelTxt,
  megjelenit,
  uresKosarOldal,
  arAtvalt,
  kosarArSzamit,
  fizetendoMegjelenit,
} from "./fuggvenyek.js";
import { init } from "./main.js";

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
    kosarOldalAllapot();
  });
  ADATOK_OLDAL.on("click", function () {
    jelenlegiOldal = 3;
    console.log(jelenlegiOldal);
    oldalToggle(jelenlegiOldal);
  });
  ADMIN_OLDAL.on("click", function () {
    jelenlegiOldal = 4;
    oldalToggle(jelenlegiOldal);
  });
}

export function kosarOldalAllapot() {
  if (KOSAR.length === 0) {
    megjelenit("#kosar-tarolo", uresKosarOldal());
    megjelenit("#fizetendo-tarolo", "");
    oldalToggle(jelenlegiOldal);
  } else {
    oldalToggle(jelenlegiOldal);
    megjelenit("#kosar-tarolo", kosarTetelTxt(KOSAR));
    megjelenit("#fizetendo-tarolo", fizetendoMegjelenit(kosarAr));
    darabSzamitas(KOSAR);
    eltavolitKosarbol(KOSAR);
  }
}

function oldalToggle(jelenlegiOldal) {
  const KOSAR_MEGJELENITO = $(".kosar-valtozo");
  const TERMEK_MEGJELENITO = $(".termek-valtozo");
  const ADAT_MEGJELENITO = $(".adatok-valtozo");
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

export function eltavolitKosarbol(lista) {
  const TOROL_GOMB = $(".termekTorolGomb");
  TOROL_GOMB.on("click", function (e) {
    termekTorlesKosarbol(lista, e.target.id);
    kosarOldalAllapot();
  });
}

function darabSzamitas(lista) {
  const DB_ELEM = $(".darabSzamlalo");
  DB_ELEM.on("change", function (e) {
    if (DB_ELEM.eq(e.target.id) != 1) {
      lista[e.target.id].db = DB_ELEM.eq(e.target.id).val();
      let ujAr = kosarArSzamit(lista);
      megjelenit("#arHelye", arAtvalt(ujAr));
    }
  });
}

export function rendezEsemeny(lista) {
  const RENDEZ_ELEM = $(".rendezesSzempontok");

  RENDEZ_ELEM.on("change", function () {
    if (RENDEZ_ELEM.val() === "novekvo") {
      const UJ_LISTA = novekvoRendez(lista);
      init(UJ_LISTA);
    }
    if (RENDEZ_ELEM.val() === "csokkeno") {
      const UJ_LISTA = csokkenoRendez(lista);
      init(UJ_LISTA);
    }
  });
}

export function szuresTipusra(lista) {
  const SZURO_ELEM = $("#szuro");
  SZURO_ELEM.on("keyup", function () {
    let szoveg = SZURO_ELEM.val();
    init(szures(lista, szoveg));
  });
}

export function torolEsemeny(lista) {
  const TOROL_ELEM = $(".torol");
  TOROL_ELEM.on("click", function (evt) {
    let index = evt.target.id;
    const UJ_LISTA = termekTorles(lista, index);
    init(UJ_LISTA);
  });
}

export function termekHozzaAd(lista) {
  const SUBMIT_ELEM = $("#submit");
  SUBMIT_ELEM.on("click", function (evt) {
    evt.preventDefault();

    const adat = {
      ar: Number($("#ar").val()),
      db: 1,
      kosarKep: $("#kep").val(),
      termek: $("#tipus").val(),
      teljesitmeny: $("#teljesitmeny").val(),
      hajtastipus: $("#hajtastipus").val(),
      co2: $("#co2").val(),
      fogyasztas: $("#fogyasztas").val(),
      gyorsulas: $("#gyorsulas").val(),
      sebessegvalto: $("#sebessegvalto").val(),
      uzemanyagtipus: $("#uzemanyag").val(),
      kep: $("#kep").val(),
    };
    console.log($(".valid-feedback").eq(0).css("display"));
    if ($(".valid-feedback").eq(0).css("display") === "block") {
      lista.push(adat);
      init(lista);
    }
  });
}
