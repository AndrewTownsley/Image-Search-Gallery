const query = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('photo-container');
let card;

searchBtn.addEventListener('click', () => {

  function getPhotos(images) {
    images.map(image => {
      card = `<div class="photo-card">
      <img src=${image.src.tiny} />
    </div>`
    container.innerHTML += card;
    console.log(card);
    })
  }

  fetch(`https://api.pexels.com/v1/search?query=${query.value}`,{
    headers: {
      Authorization: "",
    }
  })
  .then((response) => {
    console.log(response);
    return response.json()
  }).then(data => {
    getPhotos(data.photos);
  });   
})



// const container = document.getElementById("photo-container");
// let cardTag;
// function getPhotos(images) {
//    images.map(image => {
//      cardTag = `<div class="card">
//               <img src=${image.src.tiny} />
//          </div>`;
//      container.innerHTML += cardTag;
//    })
// }
// fetch("https://api.pexels.com/v1/search?query=people",{
//   headers: {
//     Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      getPhotos(data.photos);
//    })
