import banner from '../../../public/images/heros/hero-image_4.jpg';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../temp/template-creator';
// import image1 from '../../../../dist/images/heros/hero-image_4-large.jpg';
// import image2 from '../../../../dist/images/heros/hero-image_4-small.jpg';

const Home = {
  async render() {
    return `
        <div class="banner">
            <picture>
                    <source media="(max-width:600px)" srcset="./images/heros/hero-image_4-small.jpg">
                    <img src="${banner}" alt="Heroes Image">
            </picture>
        </div>
        <div class="content" id="maincontent">
            <h1 class="title-content">Explore Restaurants</h1>
            <div id="restaurants" class="restaurants">
                
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
