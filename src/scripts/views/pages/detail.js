import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../temp/template-creator';
import FavButtonInitiator from '../../utils/favorite-btn-initiator';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurants = await TheRestaurantDbSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

      FavButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurants.restaurant.id,
          name: restaurants.restaurant.name,
          city: restaurants.restaurant.city,
          rating: restaurants.restaurant.rating,
          pictureId: restaurants.restaurant.pictureId,
          description: restaurants.restaurant.description,
          address: restaurants.restaurant.address,
          menu: restaurants.restaurant.menus,
        },
      });
    } catch (error) {
      console.error('Error rendering detail page:', error);
    }
  },
};

export default Detail;
