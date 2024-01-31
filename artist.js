//IMPORT SECTION
import { createLeftContainer, createHero, createRightContainer } from "./components.js";
import { fetchRequest } from "./fetch.js";


//DECLARATION SECTION
const URL = `https://striveschool-api.herokuapp.com/api/deezer/`;
const NUMBEROFSONGS = 6;
const heroSection = document.querySelector(".container-album");
const tracklistSection = document.querySelector(".container-artist");


//FUNCTION SECTION
const getArtistInfo = async function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log("this is id", id)

    const artistInfo = await fetchRequest({
        url: URL, 
        method: "GET", 
        query: "artist/", 
        id: id
    });
    console.log(artistInfo)

    return artistInfo
}

const getArtistTracklist = async function(inputUrlTracklist) {
    let shuffleSongsArray = [];

    const artistTracklist = await fetchRequest({
        url: inputUrlTracklist, 
        method: "GET", 
        query: "", 
        id: ""
    });
    console.log(artistTracklist)


    for(let i = 0; i < NUMBEROFSONGS; i++){
       let randomIndex = Math.round(Math.random() * (artistTracklist.data.length - 1));
       shuffleSongsArray[i] = artistTracklist.data[randomIndex]
    }

    console.log(shuffleSongsArray)
    
    return shuffleSongsArray

}


const showCollectedElements = async function(inputResult) {
    heroSection.innerHTML += `<img src="${inputResult.picture_medium}" alt="">
    <h3 class ="white-text">${inputResult.name}</h3>
    <p class = "white-text">${inputResult.id}000 listeners this month</p>`

    tracklistSection.innerHTML += `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>`
}


//EXECUTION SECTION
createLeftContainer();
createRightContainer();
let result = await getArtistInfo();
let songs = getArtistTracklist(result.tracklist); 
let showTry = await showCollectedElements(result)