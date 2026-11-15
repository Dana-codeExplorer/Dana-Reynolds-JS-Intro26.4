
const api_key = "live_CJbvF8faSwrg8I7EMl0j2VfukMaE3mpjRo66nJYWc3I6NIKS5tD8KoLiwJtn9mNZ";

const base_url = "https://api.thecatapi.com/v1/breeds";

async function getCatsBreeds() {
  try {
    const url = `${base_url}`;
    const response = await fetch(url, {
      headers: {
        "x-api-key": api_key,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch cat breeds");
    }
    const data = await response.json()
    const breeds = data;
    const breedsContainer = document.querySelector("#cat-breeds");
    breedsContainer.innerHTML = "";
    breeds.forEach(breed => {
      const breedElement = document.createElement("div");
      const nameElement = document.createElement("h3");
      nameElement.textContent = breed.name;
      breedElement.appendChild(nameElement);
      if (breed.image && breed.image.url) {
        const imgElement = document.createElement("img");
        imgElement.src = breed.image.url;
        imgElement.alt = breed.name;
        imgElement.width = 200; // Optional: keeps images a manageable size
        breedElement.appendChild(imgElement);
      }
      breedsContainer.appendChild(breedElement);
      
    });
    
  } catch (error) {
    console.error("Error breed fetch:", error);
  }
  
}

document.querySelector("#fetch-cat-breeds").addEventListener("click", getCatsBreeds);
 
 
  