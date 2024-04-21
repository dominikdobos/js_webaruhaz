import { kosarArSzamit } from "./fuggvenyek.js";

export const KOSAR = [];
export let kosarAr = 0;

export function kosarbaRakas(lista, index) {
  if (KOSAR.indexOf(lista[index]) === -1) {
    KOSAR.push(lista[index]);
    kosarAr = kosarArSzamit(KOSAR);
  }
  return KOSAR;
}

export function termekTorles(lista, index) {
  lista[index].db = 1;
  lista.splice(index, 1);
  kosarAr = kosarArSzamit(lista);
  return lista;
}
