
// Counter for liked recipes
let likeCount = 0;

// Function to handle liking a recipe
function likeRecipe(recipeName) {
    alert(`You liked the recipe: ${recipeName}`);
    likeCount++;
    document.getElementById('like-count-text').textContent = likeCount;
}

// Toggle Dark/Light theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
