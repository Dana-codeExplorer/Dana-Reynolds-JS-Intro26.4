
const api_key = "OPENAI_API_KEY=live_CJbvF8faSwrg8I7EMl0j2VfukMaE3mpjRo66nJYWc3I6NIKS5tD8KoLiwJtn9mNZ";
const handleFetchCatBreeds = () => {
  getCatsBreeds();
};
const breeds_url = "https://api.thecatapi.com/v1/breeds";

async function getCatsBreeds() {
  try {
    const url = `${breeds_url}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `${api_key}`,
      },
    });
    const data = await response.json()
    const breeds = data;

    const breedsContainer = document.querySelector("#cat-breeds");
    breedsContainer.innerHTML = "";
    breeds.forEach(breed => {
      const breedElement = document.createElement("div");
      breedElement.textContent = breed.name;
      breeds.appendChild(breedElement);
    });
    
  } catch (error) {
    console.error("Error breed fetch:", error);
  }
  
}

document.querySelector("#fetch-cat-breeds").addEventListener("click", handleFetchCatBreeds);
 
 
  