export function layoutLetrehoz(lista) {
  let txt = "";
  lista.forEach((e, i) => {
    txt += `
        <div class="col-lg-6 d-flex justify-content-center p-3">
            <div class="card col-3" style="width: 400px; height: fit-content">
              <img class="card-img-top" src="${e.kep}" alt="BMW 4" />
              <div class="card-body">
                <h4 class="card-title">${e.termek}</h4>
                <div id="accordion">
                  <div class="card">
                    <div class="card-header">
                      <a
                        class="btn"
                        data-bs-toggle="collapse"
                        href="#${i}"
                      >
                        Tulajdonságok
                      </a>
                    </div>
                    <div
                      id="${i}"
                      class="collapse show"
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
                <div class="px-3 pt-3">
                  <button class="btn btn-secondary" id="${i}">Kosárba</button>
                </div>
              </div>
            </div>
          </div>
        `;
  });
  return txt;
}

export function megjelenit(szuloElem, txt) {
  const SZULO_ELEM = $(szuloElem);
  SZULO_ELEM.html(txt);
}
