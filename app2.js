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

