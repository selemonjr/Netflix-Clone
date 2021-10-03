const IMG_PATH = "https://image.tmdb.org/t/p/w300";
const containerEl = document.querySelector(".container")
const containerEl_2 = document.querySelector(".container-2")
const KEY = "63ef9c1da41cd3c843dcec9ed2264b73";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const formEl = document.querySelector(".form");
const searcher = document.querySelector(".search");
const SEARCH_API =`https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`
async function Poster(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData.results)
    showItem(respData.results)
}
Poster(API_URL);
function showItem(movies) {
    movies.forEach((movie) => {
          const {poster_path} = movie;
          const element = document.createElement("div");
         element.innerHTML = `
             <img src=${IMG_PATH + poster_path} class="images" alt="">
          `;
          containerEl_2.appendChild(element);
     });
 };
//  function showItem(movies) {
//     movies.forEach((movie) => {
//   		const {poster_path} = movie;
//   		const element = document.createElement("div");
//  		element.innerHTML = `
//              <img src=${IMG_PATH + poster_path} class="images" alt="">
//   		`;
//   		containerEl_2.appendChild(element);
//  	});
//  };
formEl.addEventListener("submit",(e) => {
    e.preventDefault();
    containerEl_2.innerHTML = "";
    const searching = searcher.value;
    if(searching) {
        Poster(SEARCH_API + searching)
    }
})