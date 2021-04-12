////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// CREATE AN EVENT LISTENER THAT OPENS A MODAL WHEN AN IMAGE IS CLICKED.
// THE MODAL SHOULD BE CENTERED, AND THE AREA AROUND BE GRAYED OUT.
// IT NEEDS A CLOSE BUTTON, AND ARROW BUTTONS THAT SWITCH TO THE NEXT IMAGE.


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
      <div class="photo-card-overlay">${image.photographer}</div>
      <img src=${image.src.tiny} class="image"/>
      </a>
      </div>`
    photoDiv.innerHTML += photoCard;
    console.log(image.photographer);
    })
  }

  fetch(`https://api.pexels.com/v1/search?query=${query.value}`, {
    headers: {
      // Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
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
