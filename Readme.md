# Webáruház

## Specifikáció

- A publikus felületen div-ekben jelenítsük meg az adatokat az előzetes minta alapján!
- Figyelj a reszponzitvitásra!
- Az oldalon legyen szűrési és rendezési lehetőség is!
- Kosár funkció: A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
- LocalStorage használata lehetséges.
- LocalStorage esetében készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.
- Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
- A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Függvények

1. layoutLetrehoz(lista)
   - lista alapján html grid-layout, paraméter lista, visszatérési érték txt
   - megjelenítése kártyák
   - minden kártyában egy Kosárba gomb
2. uresKosarOldal()
   - Ezt az oldalt fogja megjeleníteni, amikor a kosárba megyünk, de a kosarunk még üres.
   - visszatér egy stringgel, ami a html kódot tartalmazza
3. kosarTetelTxt(lista)
   - A kosár oldalt tölti fel a tételekkel.
   - Megkapja a kosár listát, majd feltölti html kódba beillesztjük a kellő helyekre a listák elemeinek a tartalmát.
   - visszatér egy stringgel, ami a html kódot tartalmazza
4. fizetendoMegjelenit(ar)
   - Megkapja a fizetendő árat, amit meg kell jelenítenie az oldalon,
   - visszatér egy stringgel, ami a html kódot tartalmazza
5. tablazatLetrehoz(lista)
   - lista alapján html táblázat, paraméter lista, visszatérési érték txt
   - minden sor mellett egy törlés ikonnal
6. adatokFormOldal()
   - Ez tartalmazza a Személyes adatok oldal html kódját
   - Akkor hívjuk, amikor a személyes adatok oldalra megyünk, és még nincs felhasználónk.
7. adatokBejelentkezett(felhasznalo)
   - A személyes adatok html kódját tartalmazza, amikor már be van regisztrálva a felhasználó
   - megkapja a felhasznalo lista tartalmát, és eszerint hozza létre az oldalt
8. megjelenit(szuloElem, txt)
   - megjelenít egy paraméterben kapott szöveget abban a szülő elemben amit kap paraméterben
9. kosarArSzamit(lista)
   - Megkapja a kosár listát és kiszámítja összegezi a tételeket az ár és a jelenlegi darabszámok szerint
   - visszaadja a kiszámított árat
10. arAtvalt(szam, tizedes)

- Paraméterben kap két számot,
- az első kapott számot átalakítja HUF valuta alakra, a második kapott szám darab tizedes jegyre
- visszaadja a formázott árat

## Adatkezelő függvények

1. kosarbaRakas(lista, index)
   - Paraméterben megkapja az autok listát és az adott indexet a listának amivel dolgozni akarunk
   - Berakja a KOSAR listába, a kosarAr globális változónak értékül adja kosarArSzamit(KOSAR) függvény eredményét
2. rendez(lista) -> const RLISTA
   - megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja
   - akkor fut le, amikor kiválasztunk egy optiont a selectből
3. szures(lista, keresoSzoveg) -> const SZURT_LISTA
   - akkor fog lefutni, ha a szűrő mezőben változás történik (keyup)
   - A listában a cím és a tulajdonságok között keres egyezéseket és szűri a listát ez alapján - filter
4. kartyaBeszur(lista) -> const UJ_LISTA
   - ha a submit gombra kattintunk, akkor fut le a függvény
   - űrlap adatokat átalakítjuk object-re majd pusholjuk
5. torol(lista, index)
   - törli a lista indexedik sorát
   - törlés ikonra kattintva (class -ra event listener, vissza adja az indexet)
