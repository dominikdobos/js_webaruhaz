export function layoutLetrehoz(lista) {
  let txt = "";
  lista.forEach((e, i) => {
    txt += `
        <div class="col-xl-4 col-lg-6 d-flex justify-content-center p-3">
            <div class="card col-3" style="width: 390px; height: fit-content">
              <img class="card-img-top" src="${e.kep}" alt="BMW 4" />
              <div class="card-body">
                <h4 class="card-title">${e.termek}</h4>
                <div id="accordion">
                  <div class="card">
                    <a
                      class="btn bg-light border-bottom"
                      data-bs-toggle="collapse"
                      href="#collapse${i}"
                    >
                      <div class="card-header bg-light border-0 text-start">
                          Tulajdonságok
                      </div>
                    </a>
                    <div
                      id="collapse${i}"
                      class="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div class="card-body">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            Teljesítmény - ${e.teljesitmeny}
                          </li>
                          <li class="list-group-item">Hajtástípus - ${
                            e.hajtastipus
                          }</li>
                          <li class="list-group-item">
                            CO2-kibocsátás (kombinált) - ${e.co2}
                          </li>
                          <li class="list-group-item">
                            Fogyasztás (kombinált) - ${e.fogyasztas}
                          </li>
                          <li class="list-group-item">
                            Gyorsulás - ${e.gyorsulas}
                          </li>
                          <li class="list-group-item">
                            Sebességváltó - ${e.sebessegvalto}
                          </li>
                          <li class="list-group-item">
                            Üzemanyagtípus - ${e.uzemanyagtipus}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-3">
                  <div class="row m-0">
                    <button class="btn btn-secondary col-md-4 kosar-gomb" id="${i}">Kosárba</button>
                    <div class="modal fade" id="kosarbaHelyez" tabindex="-1" aria-labelledby="kosarbaHelyezLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="kosarbaHelyezLabel">Köszönjük!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Sikeresen kosárba helyezted a terméket!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezár</button>
                                <button type="button" class="btn btn-primary kosarOldal" data-bs-dismiss="modal">Kosár</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 ms-auto d-flex align-items-center p-1">
                      <h5 class="w-100 m-0 p-0 text-end">${arAtvalt(
                        e.ar,
                        0
                      )}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
  });
  return txt;
}

export function uresKosarOldal() {
  let txt = `
    <h3 class="display-4 text-center pt-5" style="letter-spacing: 6px">
          Az Ön kosara jelenleg üres.
        </h3>
        <h2 class="display-6 text-center" style="letter-spacing: 3px">
          Fedezze fel ajánlatainkat!
        </h2>
        
        <button
          class="btn btn-info mt-4 termekOldal"
          style="width: fit-content; font-size: 1.4rem"
        >
          Tekintse meg most
        </button>
    `;
  return txt;
}

export function kosarTetelTxt(lista) {
  let txt = `<div class="modal fade" id="sikeresRendeles" tabindex="-1" aria-labelledby="sikeresRendelesLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
        <h1 class="modal-title fs-5 px-2" id="sikeresRendelesLabel">A rendelése sikeres!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Köszönjük, hogy minket választott!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" onclick="location.href='index.html'">Kész</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="sikertelenRendeles" tabindex="-1" aria-labelledby="sikertelenRendelesLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
        <h1 class="modal-title fs-5 px-2" id="sikertelenRendelesLabel">A rendelése sikertelen!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Regisztráljon be, mielőtt rendel!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger adatokOldal" data-bs-dismiss="modal">Regisztráció</button>
      </div>
    </div>
  </div>
</div>

`;
  lista.forEach((e, i) => {
    txt += `
    <div class="container border-bottom pb-4">
          <h3 class="display-5">
            ${e.termek} <span class="display-6"> - ${arAtvalt(e.ar, 0)}</span>
          </h3>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <img src="${e.kosarKep}" class="img-thumbnail" />
            </div>
            <div class="col-lg-6 col-sm-12 d-flex flex-column">
              <div class="col-10">
                  <div
                    class=" d-flex flex-wrap align-content-center justify-content-center gap-4"
                  >
                    <div class="d-flex flex-column text-center">
                      <p class="lead">Teljesítmény</p>
                      <p>${e.teljesitmeny}</p>
                    </div>
                    <div class="d-flex flex-column text-center">
                      <p class="lead">Hajtástípus</p>
                      <p>${e.hajtastipus}</p>
                    </div>
                    <div class="d-flex flex-column text-center">
                      <p class="lead">CO2 kibocsátás</p>
                      <p>${e.co2}</p>
                    </div>
                    <div class="d-flex flex-column text-center">
                      <p class="lead">Fogyasztás</p>
                      <p>${e.fogyasztas}</p>
                    </div>
                    <div class="d-flex flex-column text-center">
                      <p class="lead">Gyorsulás</p>
                      <p>${e.gyorsulas}</p>
                    </div>
                    <div class="d-flex flex-column text-center">
                      <p class="lead">Sebességváltó</p>
                      <p>${e.sebessegvalto}</p>
                    </div>
                    <div class="d-flex flex-column text-center">
                      <p class="lead">Üzemanyagtípus</p>
                      <p>${e.sebessegvalto}</p>
                    </div>
                  </div>
                
              </div>
              <hr />
              <div class="col">
                <div class="row d-flex align-content-center flex-wrap">
                  <div class="input-group col">
                    <span
                      class="input-group-text"
                      id="inputGroup-sizing-default"
                      >Darabszám</span
                    >
                    <input
                      type="number"
                      id="${i}"
                      class="form-control darabSzamlalo"
                      min="1"
                      max="5"
                      value="${e.db}"
                      onkeydown="return false"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <button type="button" class="btn btn-outline-danger col termekTorolGomb" id="${i}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                      ></path>
                      <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                      ></path>
                    </svg>
                    Törlés
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  });
  return txt;
}

export function fizetendoMegjelenit(ar) {
  let txt = `
  <div class="fixed-bottom m-0 py-3 bg-white border-top">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <p class="fs-2 lead align-middle m-0">
            Fizetendő: <span id="arHelye">${arAtvalt(ar, 2)}</span>
          </p>
        </div>
        <!-- Rendel gomb -->
        <div class="border-start" style="padding-left: 2.5rem">
          <button class="btn btn-success fs-4 rendelesGomb" data-bs-toggle="modal" data-bs-target="#exampleModal">Rendeld meg!</button>
        </div>
      </div>
    </div>
  </div>
  `;
  return txt;
}

export function tablazatLetrehoz(lista) {
  let txt = "<div class='table-responsive'><table class='table table-striped'>";
  txt +=
    "<thead><tr><th>Típus</th><th>Ár</th><th>Teljesítmény</th><th>Hajtástípus</th><th>CO2</th><th>Fogyasztás</th><th>Gyorsulás</th><th>Sebességváltó</th><th>Üzemanyagtípus</th><th></th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((elem, index) => {
    txt += `<tr>
            <td>${elem.termek}</td>
            <td>${elem.ar}</td>
            <td>${elem.teljesitmeny}</td>
            <td>${elem.hajtastipus}</td>
            <td>${elem.co2}</td>
            <td>${elem.fogyasztas}</td>
            <td>${elem.gyorsulas}</td>
            <td>${elem.sebessegvalto}</td>
            <td>${elem.uzemanyagtipus}</td>
            <td><button id="${index}" class="btn btn-danger torol">🗑️</button></td>
            </tr>`;
  });
  txt += "</tbody></table></div>";
  return txt;
}

export function adatokFormOldal() {
  let txt = `
  <div class="container-lg mt-4">
          <form class="was-validated">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="vNev" class="form-label">Vezetéknév</label>
                <input
                  type="text"
                  class="form-control"
                  id="vNev"
                  placeholder="Róka"
                  required
                  pattern="^[ÁÉÍÓÖŐÚÜŰA-Z][ÁÉÍÓÖŐÚÜŰA-Záéíóöőúüűa-z]{2,}$"
                />
                <div class="valid-feedback">Megfelelő.</div>
                <div class="invalid-feedback">
                  Nagy betűvel kezdődjön és legalább 3 karakter hosszú legyen.
                </div>
              </div>
              <div class="col-sm-6">
                <label for="kNev" class="form-label">Keresztnév</label>
                <input
                  type="text"
                  class="form-control"
                  id="kNev"
                  placeholder="Rudi"
                  pattern="^[ÁÉÍÓÖŐÚÜŰA-Z][ÁÉÍÓÖŐÚÜŰA-Záéíóöőúüűa-z]{2,}$"
                  required
                />
                <div class="valid-feedback">Megfelelő.</div>
                <div class="invalid-feedback">
                  Nagy betűvel kezdődjön és legalább 3 karakter hosszú legyen.
                </div>
              </div>

              <div class="col-12">
                <label for="felhasznalo" class="form-label"
                  >Felhasználónév
                  <span class="text-body-secondary">(Nem kötelező)</span></label
                >
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="felhasznalo"
                    placeholder="jazzbalettos"
                  />
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="rokarudi@jazzbalettos.com"
                  required
                />
                <div class="valid-feedback">Megfelelő.</div>
                <div class="invalid-feedback">
                  Kérem adjon meg egy valós email formátumot.
                </div>
              </div>

              <div class="col-12">
                <label for="cim" class="form-label">Szállítási cím</label>
                <input
                  type="text"
                  class="form-control"
                  id="cim"
                  placeholder="Mérnök utca 39."
                  required
                />
                <div class="valid-feedback">Megfelelő.</div>
                <div class="invalid-feedback">
                  Kérem adjon meg egy valós címet.
                </div>
              </div>

              <div class="col-12">
                <label for="cim2" class="form-label"
                  >Szállítási cím
                  <span class="text-body-secondary">(Nem kötelező)</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cim2"
                  placeholder="Emelet / Ajtó"
                />
              </div>

              <div class="col-md-5">
                <label for="orszag" class="form-label">Ország</label>
                <select class="form-select" id="orszag" required>
                  <option selected value="">Válassz...</option>
                  <option value="Magyarország">Magyarország</option>
                </select>
                <div class="valid-feedback">Megfelelő.</div>
                <div class="invalid-feedback">Válassz ki egy országot!</div>
              </div>

              <div class="col-md-4">
                <label for="megye" class="form-label">Megye</label>
                <select class="form-select" id="megye">
                  <option selected>Válassz...</option>
                  <option value="Pest">Pest</option>
                </select>
              </div>

              <div class="col-md-3">
                <label for="iranyito" class="form-label">Irányítószám</label>
                <input
                  type="text"
                  class="form-control"
                  id="iranyito"
                  placeholder=""
                  pattern="^\\d{4}$"
                  required
                />
                <div class="valid-feedback">Megfelelő.</div>
                <div class="invalid-feedback">
                  Négy darab számot tartalmazhat!
                </div>
              </div>
            </div>

            <hr class="my-4" />

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" />
              <label class="form-check-label" for="save-info"
                >Emlékezzen az adataimra.</label
              >
            </div>

            <hr class="my-4" />

            <div class="d-flex justify-content-center">
              <button
                class="w-50 btn btn-primary btn-lg"
                type="submit"
                id="submitAdat"
              >
                Regisztráció!
              </button>
            </div>
          </form>
        </div>
  `;
  return txt;
}

export function adatokBejelentkezett(felhasznalo) {
  let txt = `
  <div
          class="container-lg d-flex flex-column justify-content-center my-5 py-3"
        >
          <h2 class="display-6 text-center">Üdv, ${felhasznalo.vNev} ${felhasznalo.kNev}!</h2>
          <div
            class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center"
          >
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                  />
                </svg>
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">Az Ön keresztneve -</h6>
                    <p class="mb-0 opacity-75">${felhasznalo.kNev}</p>
                  </div>
                  <small class="opacity-50 text-nowrap">Szerkesztés</small>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                  />
                </svg>
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">Az Ön vezetékneve -</h6>
                    <p class="mb-0 opacity-75">${felhasznalo.kNev}</p>
                  </div>
                  <small class="opacity-50 text-nowrap">Szerkesztés</small>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">Az Ön email címe -</h6>
                    <p class="mb-0 opacity-75">
                    ${felhasznalo.email}
                    </p>
                  </div>
                  <small class="opacity-50 text-nowrap">Szerkesztés</small>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                  />
                </svg>
                <div class="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 class="mb-0">Az Ön szállítási címe -</h6>
                    <p class="mb-0 opacity-75">
                    ${felhasznalo.orszag}, ${felhasznalo.iranyito} ${felhasznalo.cim} ${felhasznalo.cim2}
                    </p>
                  </div>
                  <small class="opacity-50 text-nowrap">Szerkesztés</small>
                </div>
              </a>
            </div>
          </div>
        </div>
  `;
  return txt;
}

export function megjelenit(szuloElem, txt) {
  const SZULO_ELEM = $(szuloElem);
  SZULO_ELEM.html(txt);
}

export function kosarArSzamit(lista) {
  let ar = 0;
  for (let index = 0; index < lista.length; index++) {
    ar += lista[index].ar * lista[index].db;
  }
  return ar;
}

export function arAtvalt(szam, tizedes) {
  return szam.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits: tizedes,
  });
}
