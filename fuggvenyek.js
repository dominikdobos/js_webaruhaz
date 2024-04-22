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
                          <li class="list-group-item">Hajtástípus - ${e.hajtastipus}</li>
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
                    <button class="btn btn-secondary col-md-4 kosar-gomb" id="${i}" data-bs-toggle="modal" data-bs-target="#kosarbaHelyez">Kosárba</button>
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
                      <h5 class="w-100 m-0 p-0 text-end">${e.arMegjelenit}</h5>
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
          class="btn btn-info mt-4"
          style="width: fit-content; font-size: 1.4rem"
          onclick="location.href='index.html'"
        >
          Tekintse meg most
        </button>
    `;
  return txt;
}

export function kosarTetelTxt(lista) {
  let txt = ``;
  lista.forEach((e, i) => {
    txt += `
    <div class="container border-bottom pb-4">
          <h3 class="display-5">
            ${e.termek} <span class="display-6"> - ${e.arMegjelenit}</span>
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
            Fizetendő: <span id="arHelye">${ar.toLocaleString("hu-HU", {
              style: "currency",
              currency: "HUF",
              minimumFractionDigits: 2,
            })}</span>
          </p>
        </div>
        <div class="border-start" style="padding-left: 2.5rem">
          <button class="btn btn-success fs-4">Rendeld meg!</button>
        </div>
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

export function arAtvalt(szam) {
  return szam.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits: 2,
  });
}
