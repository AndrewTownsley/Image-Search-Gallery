
const query = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const photoContainer = document.getElementById('photo-container');
const main = document.getElementById('main');
const photoHeader = document.getElementById('photo-header');
let photoCard;

const photoDiv = document.createElement('div');
photoDiv.classList.add('photo-container');
main.appendChild(photoDiv);

searchBtn.addEventListener('click', (e) => {

  e.preventDefault();
  photoHeader.innerText = `'${query.value}'`;
  photoDiv.innerHTML = '';

  function getPhotos(images) {
    images.map(image => {
      photoCard = 
      `<div class="photo-card">
      <a href=${image.url}>
      <div class="photo-card-overlay">${image.photographer}</div>
      <img src=${image.src.tiny} alt=${query.value} class="image"/>
      </a>
      </div>`
    photoDiv.innerHTML += photoCard;
    })
  }

  fetch(`https://api.pexels.com/v1/search?query=${query.value}`, {
    headers: {
      Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
    }
  })
  .then((response) => {
    return response.json();
  })
  .then(data => {
    getPhotos(data.photos)
    console.log(data.photos);
  })
})

