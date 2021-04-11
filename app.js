const query = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const photoContainer = document.getElementById('photo-container');
const main = document.getElementById('main');
let photoCard;

const photoDiv = document.createElement('div');
photoDiv.classList.add('photo-container');
main.appendChild(photoDiv);

searchBtn.addEventListener('click', () => {
  
  photoDiv.innerHTML = '';

  function getPhotos(images) {
    images.map(image => {
      photoCard = 
      `<div class="photo-card">
      <a href=${image.url}>
      <img src=${image.src.tiny} />
      </a>
      </div>`
    photoDiv.innerHTML += photoCard;
    console.log(image.photographer);
    })
  }

  fetch(`https://api.pexels.com/v1/search?query=${query.value}`, {
    headers: {
      Authorization:  ""
    }
  })
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    getPhotos(data.photos)
    console.log(data.photos);
    console.log(data.photos.photographer);
  })
})

