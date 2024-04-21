export const KOSAR = [];
export let kosarAr = 0;

export function kosarbaRakas(lista, index) {
  if (KOSAR.indexOf(lista[index]) === -1) {
    KOSAR.push(lista[index]);
    kosarAr += lista[index].ar;
  }
  return KOSAR;
}

export function termekTorles(lista, index) {
  lista.splice(index, 1);
  return lista;
}

export function arSzamitas(lista) {
  const DB_SZAMLALO = $(".darabSzamlalo");
  let ar = 0;
  for (let index = 0; index < lista.length; index++) {
    ar += lista[index].ar * DB_SZAMLALO.eq(index).val();
  }
  return ar;
}
