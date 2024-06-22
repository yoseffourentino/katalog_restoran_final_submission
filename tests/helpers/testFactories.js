/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-btn-initiator";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
