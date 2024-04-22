import { FELHASZNALO } from "./adatok.js";
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
  adatokFormOldal,
  adatokBejelentkezett,
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
    oldalToggle(jelenlegiOldal);
    adatokOldalAllpot();
    felhHozzaad(FELHASZNALO);
  });
  ADMIN_OLDAL.on("click", function () {
    jelenlegiOldal = 4;
    oldalToggle(jelenlegiOldal);
  });
}

export function adatokOldalAllpot() {
  if (FELHASZNALO.length === 0) {
    megjelenit(".adatok-valtozo", adatokFormOldal());
  } else {
    megjelenit(".adatok-valtozo", adatokBejelentkezett(FELHASZNALO[0]));
  }
}

export function kosarOldalAllapot() {
  if (KOSAR.length === 0) {
    megjelenit("#kosar-tarolo", uresKosarOldal());
    megjelenit("#fizetendo-tarolo", "");
    oldalToggle(jelenlegiOldal);
    oldalValtas();
  } else {
    oldalToggle(jelenlegiOldal);
    megjelenit("#kosar-tarolo", kosarTetelTxt(KOSAR));
    megjelenit("#fizetendo-tarolo", fizetendoMegjelenit(kosarAr));
    darabSzamitas(KOSAR);
    eltavolitKosarbol(KOSAR);
    rendeles();
    oldalValtas();
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
    console.log(index);
    const UJ_LISTA = termekTorles(lista, index);
    init(UJ_LISTA);
  });
}

export function termekHozzaad(lista) {
  const SUBMIT_ELEM = $("#submitTablazat");
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

export function felhHozzaad(lista) {
  const SUBMIT_ELEM = $("#submitAdat");
  SUBMIT_ELEM.on("click", function (evt) {
    evt.preventDefault();

    const adat = {
      vNev: $("#vNev").val(),
      kNev: $("#kNev").val(),
      email: $("#email").val(),
      cim: $("#cim").val(),
      cim2: $("#cim2").val(),
      orszag: $("#orszag").val(),
      megye: $("#megye").val(),
      iranyito: $("#iranyito").val(),
    };

    if (
      $(".valid-feedback").eq(0).css("display") === "block" &&
      $(".valid-feedback").eq(1).css("display") === "block" &&
      $(".valid-feedback").eq(2).css("display") === "block" &&
      $(".valid-feedback").eq(3).css("display") === "block" &&
      $(".valid-feedback").eq(4).css("display") === "block" &&
      $(".valid-feedback").eq(5).css("display") === "block"
    ) {
      lista.push(adat);
      adatokOldalAllpot();
    }
  });
}

function rendeles() {
  const RENDELES_GOMB = $(".rendelesGomb");
  RENDELES_GOMB.on("click", function () {
    if (FELHASZNALO.length === 0) {
      $("#sikertelenRendeles").modal("show");
    } else {
      $("#sikeresRendeles").modal("show");
    }
  });
}
