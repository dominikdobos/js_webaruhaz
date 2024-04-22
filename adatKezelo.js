import { kosarArSzamit } from "./fuggvenyek.js";
import { init } from "./main.js";

export const KOSAR = [];
export let kosarAr = 0;

export function kosarbaRakas(lista, index) {
  if (KOSAR.indexOf(lista[index]) === -1) {
    KOSAR.push(lista[index]);
    kosarAr = kosarArSzamit(KOSAR);
  }
  return KOSAR;
}

export function termekTorlesKosarbol(lista, index) {
  lista[index].db = 1;
  lista.splice(index, 1);
  kosarAr = kosarArSzamit(lista);
  return lista;
}

export function termekTorles(lista, index) {
  lista.splice(index, 1);
  return lista;
}

export function novekvoRendez(lista) {
  lista.sort(function (a, b) {
    return a.ar - b.ar;
  });
  return lista;
}

export function csokkenoRendez(lista) {
  lista.sort(function (a, b) {
    return b.ar - a.ar;
  });
  return lista;
}

export function szures(lista, keresoSzoveg) {
  const szurtLista = lista.filter(function (auto) {
    return auto.termek.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLista;
}

export function termekHozzaAd(lista) {
  const SUBMIT_ELEM = $("#submit");
  SUBMIT_ELEM.on("click", function (evt) {
    evt.preventDefault();

    const adat = {
      ar: $("#ar").val(),
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

    lista.push(adat);
    init(lista);

    // console.log($(".valid-feedback").eq(0).css("display"));
    // if (
    //   $(".valid-feedback").eq(0).css("display") === "block" &&
    //   $(".valid-feedback").eq(1).css("display") === "block"
    // ) {
    //   lista.push(adat);
    //   init(lista);
    // }
  });
}
