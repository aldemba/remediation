const API_URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMG_URL= "https://image.tmdb.org/t/p/w1280";


const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main=document.getElementById('main')
const form=document.getElementById('form')
const search=document.getElementById('search')
var page=1;

getMovies(API_URL);

function getMovies(url){
 fetch(url).then(res=>res.json()).then(data =>{
    //  console.log(data.results);
    showMovies(data.results);
 })

}



function showMovies(data){
    // main.innerHTML='';
    data.forEach(movie => {
    const {title, poster_path,vote_average,overview}=movie;
    const movieEl=document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML=` <img src="${IMG_URL+poster_path}" alt="" srcset="">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
        <h3>overview</h3>
        ${overview}
    </div>`

    main.appendChild(movieEl)

})


}


function getColor(vote){
if(vote>=8){
    return "green"
}else if(vote>=5){
    return "orange"
}
else{
    return "red"
}

}


// form.addEventListener('submit', (e)=>{

    
// })



//fonction qui gére le scroll
window.onscroll=function(){
if(window.innerHeight + window.scrollY >= document.body.scrollHeight)   {
    page++;
    getMovies(API_URL+page);
}


}


//fonction qui gere la recherche

search.onkeyup= (e) =>{

    e.preventDefault();
    const chercher=search.value;
    if(chercher){
     main.innerHTML=''
     getMovies(SEARCHAPI+chercher)   
    }else{
        getMovies(API_URL)
    }


};

