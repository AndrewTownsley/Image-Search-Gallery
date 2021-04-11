const query = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('photo-container');
let card;


searchBtn.addEventListener('click', () => {

container.innerHTML = '';

  function getPhotos(images) {
    images.map(image => {
      card = `<div class="photo-card">
      <img src=${image.src.tiny} />
    </div>`
    container.innerHTML += card;
    })
  }

  fetch(`https://api.pexels.com/v1/search?query=${query.value}`, {
    headers: {
      Authorization:  "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
    }
  })
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    getPhotos(data.photos)
  })
})

