const queryInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const photoContainer = document.getElementById('photo-container');
const main = document.getElementById('main');
const photoHeader = document.getElementById('photo-header');
let photoCard;
let search = false;
let pageNum = 1;

const photoDiv = document.createElement('div');
photoDiv.classList.add('photo-container');
main.appendChild(photoDiv);

const loading = document.createElement('h1');
loading.classList.add('loading');
loading.innerText = 'Loading Images...';
photoHeader.appendChild(loading);

const loadBtnDiv = document.createElement('div');
loadBtnDiv.classList.add('load-more-div');
main.appendChild(loadBtnDiv);

const loadMoreBtn = document.createElement('button');
loadMoreBtn.classList.add('load-btn');
loadMoreBtn.classList.add('btn', 'hide');
loadMoreBtn.innerText = 'Load More'
loadBtnDiv.appendChild(loadMoreBtn);

const fetchCuratedPhotos = async (pageNum) => {
  const data = await fetch(`https://api.pexels.com/v1/search?query=nature&page=${pageNum}`,
   {
     headers: {
       Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7",
     },
   });
   const response = await data.json();
   getPhotos(response);
}

function getPhotos(response) {
  response.photos.map(image => {
    photoCard = 
    `<div class="photo-card">
    <a href=${image.url}>
    <div class="photo-card-overlay">${image.photographer}</div>
    <img 
      src=${image.src.medium} 
      class="image" 
      alt=${image.alt}
    />
    </a>
    </div>`
  photoDiv.innerHTML += photoCard;
  })
  loading.classList.toggle('hide');
  loadMoreBtn.classList.toggle('hide');
}

const searchPhotos = async (pageNum) => {
  const data = await fetch(`https://api.pexels.com/v1/search?query=${queryInput.value}&page=${pageNum}`,
  {
    headers: {
      Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7",
    },
  });
  const response = await data.json();
  getPhotos(response);
  photoHeader.innerText = `'${queryInput.value}' Search Results`;
}

searchBtn.addEventListener('click', (e) => {

  e.preventDefault();

  if(queryInput.value !== '') {

    let query = e.target.value;
    search = true;
    photoHeader.innerText = `Loading Images...`;
    photoDiv.innerHTML = '';
    
    fetch(`https://api.pexels.com/v1/search?query=${queryInput.value}&page=${pageNum}`, {
      headers: {
        Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
      }
    })
    .then((response) => {
      return response.json();
    })
    searchPhotos(query, pageNum);
    loadMoreBtn.classList.toggle('hide');
  }
  })
  
  loadMoreBtn.addEventListener('click', () => {
  if(!search) {
    pageNum++;
    fetchCuratedPhotos(pageNum);
  } else {
    if(queryInput.value === "")
    return;
    pageNum++
    searchPhotos(pageNum);
  }
})

fetchCuratedPhotos(pageNum);

