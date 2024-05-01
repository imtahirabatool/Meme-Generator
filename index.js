// Selecting elements
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

// Function to update meme details
const updateDetails = (url, title, author) => {
    memeImage.src = url; // Using dot notation for setting image src
    memeTitle.textContent = title; // Using textContent for security and performance
    memeAuthor.textContent = `Meme by: ${author}`; // Using textContent for security and performance
};

// Function to generate meme
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json()) // Simplified arrow function
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    })
    .catch(error => {
        console.error("Error fetching meme:", error);
    });
};

// Event listener for generate meme button
generateMemeBtn.addEventListener("click", generateMeme);
