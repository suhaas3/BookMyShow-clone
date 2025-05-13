const moviesList = [
  {title:"Raid 2",genre:"Drama/Thriller",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00382745-lxrdjxktjl-portrait.jpg"},
  {title:"Kesari 2",genre:"Drama/Historical",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00439158-flhksfkatd-portrait.jpg"},
  {title:"Shinchan: Our Dinosaur Daily",genre:"Adventure/Anime/Comedy/Drama",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00439369-yzjqdhyrde-portrait.jpg"},
  {title:"Final Deatination",genre:"Horror/Supernatural/Triller",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00432143-hedyvulzka-portrait.jpg"},
  {title:"Mission: Impossible",genre:"Action/Adventure/Thriller",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00419530-vwglsjmfwx-portrait.jpg"}
];

const renderMoviesList = moviesList.map((copyMoviesList) => {
  return `
          <div class="col">
            <div class="card card-size">
              <img src="${copyMoviesList.image}" class="card-img-top s-img" alt="...">
              <div class="card-body">
                <h5 class="card-title title-space">${copyMoviesList.title}</h5>
                <p class="card-text card-genre">${copyMoviesList.genre}</p>
                <button class="book-button">BookYourShow</button>
            </div>
          </div>
      </div>
  `;
})

const renderMoviesListHtml = document.getElementById("myMoviesList");

renderMoviesListHtml.innerHTML = renderMoviesList;



