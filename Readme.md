# Webáruház

## Függvények

1. layoutLetrehoz(lista)
   - lista alapján html grid-layout, paraméter lista, visszatérési érték txt
   - megjelenítése kártyák
   - minden kártyában egy Kosárba gomb
2. tablazatLetrehoz(lista)
   - lista alapján html táblázat, paraméter lista, visszatérési érték txt
   - minden sor mellett egy törlés ikonnal
3. megjelenit(szuloElem, txt)
   - megjelenít egy szöveget amit kap
4. rendez(lista) -> const RLISTA
   - megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja
   - akkor fut le, amikor kiválasztunk egy optiont a selectből
5. szures(lista, keresoSzoveg) -> const SZURT_LISTA
   - akkor fog lefutni, ha a szűrő mezőben változás történik (keyup)
   - A listában a cím és a tulajdonságok között keres egyezéseket és szűri a listát ez alapján - filter
6. kartyaBeszur(lista) -> const UJ_LISTA
   - ha a submit gombra kattintunk, akkor fut le a függvény
   - űrlap adatokat átalakítjuk object-re majd pusholjuk
7. torol(lista, index)
   - törli a lista indexedik sorát
   - törlés ikonra kattintva (class -ra event listener, vissza adja az indexet)
