const api_key =
  'live_CJbvF8faSwrg8I7EMl0j2VfukMaE3mpjRo66nJYWc3I6NIKS5tD8KoLiwJtn9mNZ';

async function getCatBreeds() {
  try {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const response = await fetch(url, {
      headers: {
        'x-api-key': api_key,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch cat breeds');
    }
    const data = await response.json();
    const breeds = data;
    const breedsContainer = document.querySelector('#cat-breeds');
    breedsContainer.innerHTML = '';
    breeds.forEach((breed) => {
      const breedElement = document.createElement('div');
      const nameElement = document.createElement('h3');
      nameElement.textContent = breed.name;
      const originElement = document.createElement('p');
      breedElement.appendChild(nameElement);
      originElement.textContent = breed.origin;
      originElement.setAttribute('class', 'cat-origin');
      breedElement.appendChild(originElement);
      if (breed.image && breed.image.url) {
        const imgElement = document.createElement('img');
        imgElement.src = breed.image.url;
        imgElement.alt = breed.name;
        imgElement.width = 200; // Optional: keeps images a manageable size
        breedElement.appendChild(imgElement);
      }
      breedsContainer.appendChild(breedElement);
    });
  } catch (error) {
    console.error('Error breed fetch:', error);
  }
}
const clearBtn = document.querySelector('#clear-breeds-btn');
const breedsContainer = document.querySelector('#cat-breeds');
clearBtn.addEventListener('click', () => {
  breedsContainer.innerHTML = '';
});
document
  .querySelector('#fetch-cat-breeds')
  .addEventListener('click', getCatBreeds);

// Search Cats by id Section

const searchCatForm = document.querySelector('#search-cat-form'); //form
const searchInput = document.querySelector('#search-cat-input'); //input
const searchResultsContainer = document.querySelector('#results-cat-container'); //div -results container
const searchResults = document.querySelector('#search-cat-results'); //div -results container
searchCatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userQuery = searchInput.value.trim();
  if (!userQuery) {
    searchResultsContainer.innerHTML = '<p>Please enter a cat breed.</p>';
    return;
  }
  searchResults.innerHTML = 'Searching...';
  searchResultsContainer.appendChild(searchResults);
  try {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${userQuery}`;
    const breedResponse = await fetch(url, {
      headers: {
        'x-api-key': api_key,
      },
    });
    if (!breedResponse.ok) {
      throw new Error(`Failed to search cats(Status: ${breedResponse.status})`);
    }
    const breeds = await breedResponse.json();
    if (breeds.length === 0) {
      searchResultsContainer.innerHTML = `<p>No cats found matching "${userQuery}"</p>`;
      return;
    }
    const breedId = breeds[0].id;
    const imageResponse = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=3`,
      {
        headers: {
          'x-api-key': api_key,
        },
      },
    );
    if (!imageResponse.ok) {
      throw new Error(
        `Failed to fetch cat images(Status: ${imageResponse.status})`,
      );
    }
    const images = await imageResponse.json();
    searchResultsContainer.innerHTML = '';
    images.forEach((image) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = breeds[0].name;
      imgElement.width = 200;
      imgElement.setAttribute('class', 'cat-image');
      searchResultsContainer.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Error search fetch:', error);
    searchResultsContainer.innerHTML = `<p> Failed to fetch cat images: ${error.message}</p>`;
  }
  
  });
const clearBreedsBtn = document.querySelector('#clear-cats-btn');
    clearBreedsBtn.addEventListener('click', () => {
    searchResultsContainer.innerHTML = '';
    searchInput.value = '';
  });
