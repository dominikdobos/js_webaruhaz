import { kosarArSzamit } from "./fuggvenyek.js";

export const KOSAR = [];
export let kosarAr = 0;

export function kosarbaRakas(lista, index) {
  if (KOSAR.indexOf(lista[index]) === -1) {
    $("#kosarbaHelyez").modal("show");
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
