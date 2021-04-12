const query = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const photoContainer = document.getElementById('photo-container');
const main = document.getElementById('main');
const photoHeader = document.getElementById('photo-header');
let photoCard;

const photoDiv = document.createElement('div');
photoDiv.classList.add('photo-container');
main.appendChild(photoDiv);

searchBtn.addEventListener('click', () => {
  
  photoHeader.innerText = `"${query.value}" Photos`;
  photoDiv.innerHTML = '';

  function getPhotos(images) {
    images.map(image => {
      photoCard = 
      `<div class="photo-card">
      <a href=${image.url}>
      <p class="photo-card-overlay">${image.photographer}</p>
      <img src=${image.src.tiny} class="image" />
      </a>
      </div>`
    photoDiv.innerHTML += photoCard;
    console.log(image.photographer);
    })
  }

  fetch(`https://api.pexels.com/v1/search?query=${query.value}`, {
    headers: {
      Authorization: ""
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


// const image = document.getElementById('image');
// image.addEventListener('mouseover', () => {
//   image.classList.add('photo-info');
// })




// create a div

// add a class of 'photo-card'

// create an img

// add img to 'photo-card' div

// append div to 'main'




