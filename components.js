/*Questa funzione è stata creata per non dover copiare e incollare lo stesso codice in 3 pagine diverse.
In sostanza questa funzione crea gli elementi nel left-container.
Questa funzione va importata e richiamata nei singoli file .js, in modo che quando si effettua una modifica,
quest'ultima viene applicata automaticamente in ogni singola pagina*/
export function createLeftContainer() {
  // salvo il codice html dentro la variabile "elements"
  let elements = `
        <div class="ms-3">
            <div class="dropdown">
                <button
                    class="btn btn-black"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i class="bi bi-three-dots text-white fs-5"></i>
                </button>
                <ul class="dropdown-menu dropdownList">
                    <li>
                        <div class="btn-group dropend">
                            <button
                                type="button"
                                class="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdownArtist"
                                aria-expanded="false"
                            >
                                Artist
                            </button>
                            <ul class="dropdown-menu">
                                <p>ciao</p>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div class="btn-group dropend">
                            <button
                                type="button"
                                class="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdownAlbum"
                                aria-expanded="false"
                            >
                                Album
                            </button>
                            <ul class="dropdown-menu">
                                <p>ciao</p>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="list-links border-bottom border-secondary">
                <ul class="mb-5">
                    <li class="d-flex text-white-50 gap-2 mb-2">
                        <i class="bi bi-house-door-fill"></i>
                        <p class="m-0">Home</p>
                    </li>
                    <li class="d-flex text-white-50 gap-2 mb-2">
                        <i class="bi bi-search"></i>
                        <p class="m-0">Cerca</p>
                    </li>
                    <li class="d-flex text-white-50 gap-2 mb-2">
                        <svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            class="Svg-sc-ytk21e-0 bneLcE iconLibrary"
                        >
                            <path
                                d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                            ></path>
                        </svg>
                        <p class="m-0">La tua libreria</p>
                    </li>
                </ul>

                <ul>
                    <li class="d-flex text-white-50 gap-2 mb-2">
                        <i class="bi bi-plus-square-fill"></i>
                        <p class="m-0">Crea Playlist</p>
                    </li>
                    <li class="d-flex text-white-50 gap-2 mb-2">
                        <i class="bi bi-heart-fill"></i>
                        <p class="m-0">Brani che ti piacciono</p>
                    </li>
                    <li class="d-flex text-white-50 gap-2 mb-2">
                        <i class="bi bi-bookmark-fill"></i>
                        <p class="m-0">I tuoi episodi</p>
                    </li>
                </ul>
            </div>

            <div class="list-tracks">
                <ul class="list-group ms-3" data-bs-spy="scroll">
                </ul>
            </div>
        </div>`;

  // seleziono il left container, lo svuoto e inserisco elements con innerHtml
  const leftContainer = document.querySelector(".left-container");
  leftContainer.innerHTML = "";
  leftContainer.innerHTML = elements;

  /*questa parte l'ho creata per testare il div che contiene la lista di tutte le tracce (o album)
    - Ho semplicemente creato un loop che inserisce 30 "li" in "ul"
    - Ovviamente va modificata prendendo l'array di tracce/album e inserirli in lista
    - Per creare lo scroll ho dato un altezza in css al div ".list-tracks" */
  const ulListTracks = document.querySelector(".list-tracks > ul");
  ulListTracks.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const li = `<li class="list-group-item border-0 bg-black text-white-50 ">Track ${
      i + 1
    }</li>`;
    ulListTracks.innerHTML += li;
  }
}
// qui avvio la funzione che crea gli elementi nel left container
createLeftContainer();
