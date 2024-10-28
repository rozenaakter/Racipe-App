const recipes = [
    {
        title : 'Pasta Carbonara',
        description : 'Delicious pasta with chicken.'
    },

    {
        title : 'Pasta Carbonara',
        description : 'Delicious pasta with chicken.'
    },

    {
        title : 'Pasta Carbonara',
        description : 'Delicious pasta with chicken.'
    }
];

const recipeList = document.getElementById('recipe-list');
const recipeDetails = document.getElementById('recipe-details');
const recipeTitle = document.getElementById('recipe-title');
const recipeDescription = document.getElementById('recipe-description');

recipes.forEach((recipe,index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('recipe');
    listItem.textContent = recipe.title;
    listItem.addEventListener('click', () => showDetails(index));
    recipeList.appendChild(listItem);
});

function showDetails (index) {
    const selectedRecipe = recipes[index];

    recipeTitle.textContent = selectedRecipe.title;
    recipeDescription.textContent = selectedRecipe.description;
    recipeDetails.style.display = 'block';
}

function closeDetails() {
    recipeDetails.style.display = 'none';
}