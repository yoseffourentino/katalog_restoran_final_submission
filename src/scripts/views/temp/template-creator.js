import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from "../../globals/config";

const START = 10;
const NUMBER_OF_IMAGES = 100;

const createRestaurantItemTemplate = (restaurant) => `
        <div class="card">
        <h3 class="resto-name">${restaurant.name}</h3>
            <div class="content">
                <img class="resto-img lazyload" src="${CONFIG.BASE_MEDIUM_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} restaurant">
                <div class="resto-title">
                    <h4 class="city"><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</h4>
                    <h5 class="rating"><i class="fa-solid fa-star"></i> ${restaurant.rating}</h5>
                </div>
                <div class="detail-button">
                    <a href="#/detail/${restaurant.id}">Detail</a>
                </div>
            </div>
        </div>                                                                                                                                     
`;
const createRestaurantDetailTemplate = (e) => `
    <div class="detail-container">
        <div class="card-detail">
            <img class="lazyload" src="${CONFIG.BASE_LARGE_IMAGE_URL}${e.restaurant.pictureId}" alt="${e.restaurant.name} restaurant">
            <div class="restaurant-name">
                <h3 class="resto-name">${e.restaurant.name}</h3>
                <h5 class="rating"><i class="fa-solid fa-star"></i>  ${e.restaurant.rating}</h5>
            </div>
            <h4 class="city"><i class="fa-solid fa-location-dot"></i> ${e.restaurant.city} - ${e.restaurant.address}</h4>
            <p class="desc">${e.restaurant.description}</p>
            <p class="categories">Categories: <p>${e.restaurant.categories.map((categories) => categories.name)}</p></p>
            
            <div class="menu">
                <p class="foods">Foods: <p>${e.restaurant.menus.foods.map((food) => food.name).join(", ")}</p></p>
                <p class="foods">Drinks: <p>${e.restaurant.menus.drinks.map((drinks) => drinks.name).join(", ")}</p></p>
            </div>
        </div>
        <div class="customer-review">
            <h3>Customer Review:</h3>
            <div class="review-container">
                ${e.restaurant.customerReviews.map((review) => `
                <p class="name">${review.name}</p>
                <p class="date">${review.date}</p>
                <p class="review">${review.review}</p>
                <hr>   
                `).join("")}
            </div>
        </div>
    </div>
`;
const createFavoriteButtonTemplate = () => `
    <button aria-label="like this restaurant" id="fav-btn" class="fav-btn">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="fav-btn" class="fav-btn">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
