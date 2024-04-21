export const KOSAR = [];
export let kosarAr = 0;

export function kosarbaRakas(lista, index) {
  if (KOSAR.indexOf(lista[index]) === -1) {
    KOSAR.push(lista[index]);
    kosarAr += lista[index].ar;
  }
  return KOSAR;
}

export function kosarTorles(lista, index) {
  lista.splice(lista, index);
  return lista;
}
