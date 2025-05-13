const premiuresObject = [
  {title:"Butcher's Crossing",language:"English",image:"https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/butcher-s-crossing-et00424768-1737963881.jpg"},
  {title:"The Lord of the Rings",language:"English",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00409188-jyazlupqgh-portrait.jpg"},
  {title:"Venom",language:"English",
    image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00429961-ydlahxczuj-portrait.jpg"
  },
  {title:"Chhava",language:"Hindi",image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shivrayancha-chhava-et00370805-1705302615.jpg"
  },
  {title:"Devara",language:"telugu",image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg"}
];

const renderPremiuresObject = premiuresObject.map((copyOfPremiuresObject) => {
  return `
  <div class="col">
  <div class="card card-img-size">
  <img class="card-img-top premium-show-img" src="${copyOfPremiuresObject.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${copyOfPremiuresObject.title}</h5>
    <p class="card-text">${copyOfPremiuresObject.language}</p>
  </div>
</div>
</div>
  `;
})

const premiuresObjectHtml = document.getElementById("premiere-movies");

premiuresObjectHtml.innerHTML = renderPremiuresObject;

