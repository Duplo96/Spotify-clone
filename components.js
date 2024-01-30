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

export const createHero = ({ picture }) => {
  const divCard = document.createElement("div");
  const divRow = document.createElement("div");
  const divImgCol = document.createElement("div");
  const img = document.createElement("img");
  const divCardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardText1 = document.createElement("p");
  const cardText2 = document.createElement("p");
  const smallText = document.createElement("small");

  divCard.classList.add("card", "mb-3");
  divRow.classList.add("row", "g-0");
  divImgCol.classList.add("col-md-4");
  img.classList.add("img-fluid", "rounded-start");
  img.src = `${picture}`;
  img.setAttribute("alt", "...");
  divCardBody.classList.add("col-md-8", "card-body");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "Card title";
  cardText1.classList.add("card-text");
  cardText1.textContent =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  cardText2.classList.add("card-text");
  smallText.classList.add("text-body-secondary");
  smallText.textContent = "Last updated 3 mins ago";

  divCard.appendChild(divRow);
  divRow.appendChild(divImgCol);
  divRow.appendChild(divCardBody);
  divImgCol.appendChild(img);
  divCardBody.appendChild(cardTitle);
  divCardBody.appendChild(cardText1);
  divCardBody.appendChild(cardText2);
  cardText2.appendChild(smallText);

  return divCard;
};
export function createRightContainer() {
  let elements = `
           <div class="mt-3 mb-5 d-flex justify-content-between">
                  <h5 class="text-white mt-1">Attività amici</h5>
                  <div class="icons d-flex gap-2 me-2 fs-5">
                    <i class="bi bi-person-plus"></i>
                    <i class="bi bi-x-lg"></i>
                  </div>
                </div>

                <div class="friends-list"></div>`;

  const rightContainer = document.querySelector(".right-container");
  rightContainer.innerHTML = "";
  rightContainer.innerHTML = elements;

  const ulListFriends = document.querySelector(".friends-list");
  ulListFriends.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const liFriend = `<div class="friend-card container-fluid">
        <div class="card mb-3 bg-black text-white-50" >
            <div class="row g-0">
                <div class="img-fluid col-md-3">
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ou-8P-0uoxOYsZeul6wpigHaE8%26pid%3DApi&f=1&ipt=9399a6c6bf063bfee346eb5202c15a74d2eb835cc6ef20e9840242b1a5c4fe4e&ipo=images"
                        class="img-fluid rounded-circle picture"
                        alt="picture"
                    />
                </div>

                <div class="text-container col-md-9">
                    <div class="title d-flex justify-content-between">
                        <h6 class="card-title">Kwadwo Asamoha</h6>
                        <p class="m-0">4 ore</p>
                    </div>

                    <p class="card-text m-0">Album ● Artist</p>

                    <div class="track d-flex gap-2">
                        <i class="bi bi-music-note-beamed"></i>
                        <p class="m-0">Track</p>
                    </div>
                </div>
            </div>
        </div >
    </div>`;

    ulListFriends.innerHTML += liFriend;
  }
}
