import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const ENCONTRAR_FILME = document.getElementById("encontrarFilme");
const INSERT_IMG = document.getElementById("posterFilme");
const INSERT_TITLE = document.getElementById("tituloFilme");
const INSERT_DESC = document.getElementById("descFilme");

var data;
var image;
var title;
var desc;


const basicFetch = async (endpoint) => {
  const req = await fetch(`${BASE_URL}${endpoint}?&${language}&${API_KEY}`)
  const json = await req.json();
  data = JSON.stringify(json);

  image = `${IMG_URL}${json.poster_path}`;
  title = json.title;
  desc = json.overview;
  
  return [image, title, desc];
}

function findMovie(num){
  basicFetch(num);

  if(!data){

    image = './Poster.png';
    title = "Ops, hoje não é dia de assistir filme. Bora codar!";

    return{image, title};

  } else {

    return {image, title, desc};

  }
  
}

function appendMovie(){
  const dados = findMovie(Math.floor(Math.random() * 900 + 1));
  console.log(dados.image);
  console.log(dados.title);
  console.log(dados.desc);


  if(dados.desc){
    INSERT_IMG.src = image;
    INSERT_TITLE.innerHTML = title;
    INSERT_DESC.innerHTML=desc;
    
  } else {
    INSERT_IMG.src = image;
    INSERT_TITLE.innerHTML = title;
  }


}

ENCONTRAR_FILME.addEventListener("click", function(){
  appendMovie();
});





