   const dummyData = [  { id: 1, name: 'Laptop', price: 1200.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag" }, 
     { id: 2, name: 'Smartphone', price: 800.00,quantity: 2, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag"},
     { id: 3, name: 'Headphones', price: 150.00,quantity: 3, image: "https://via.placeholder.com/400x300?text=Premium+Leather+Bag"}

];

if (!localStorage.getItem('cart')) {

    // If not, store the initial cart items in localStorage
    
    localStorage.setItem('cart', JSON.stringify(dummyData));
    
     };


     // Function to Create Favourite meal Item
const createFavoriteMealItem = (meal) => {
    const card = document.createElement("div");
    card.classList.add("FavMealCard");
  
    card.innerHTML = `
    <img src="${meal.strMealThumb}" >
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}</span> Dish</p>
    <p>Belongs to <span>${meal.strCategory}</span> Category</p>
    `;
  
    // create remove button
    const removeFavBtn = document.createElement("button");
    removeFavBtn.textContent = "Remove";
    card.appendChild(removeFavBtn);
  
    // Add an event listener to the "Remove" button to remove the meal from favorites page
    removeFavBtn.addEventListener("click", () => {
      removeFromFavorites(meal);
      card.remove(); // Remove the card from the display
    });
  };