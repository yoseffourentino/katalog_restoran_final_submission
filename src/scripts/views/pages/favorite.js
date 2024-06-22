import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../temp/template-creator";

const Favorite = {
  async render() {
    return `
        <h1 class="fav-title">Favourite Restaurants</h1>
        
        <section class="fav-container"></section>

        `;
  },

  async afterRender() {
    const cardsContainer = document.querySelector(".fav-container");
    const renderFavoriteRestaurants = async () => {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      cardsContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        cardsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    };

    await renderFavoriteRestaurants();
  },

};

export default Favorite;
