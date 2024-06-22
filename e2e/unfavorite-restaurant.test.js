/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavorite a Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorited restaurant', ({ I }) => {
  I.see("Oops, sorry, you don't have any favorite restaurants yet", '.fav-container ');
});

Scenario('Unfavorite a restaurant', async ({ I }) => {
  I.see("Oops, sorry, you don't have any favorite restaurants yet", '.fav-container');

  I.amOnPage('/');

  I.seeElement('.card h3');
  const favoriteRestaurant = locate('.card h3').first();
  const favoriteRestaurantName = await I.grabTextFrom(favoriteRestaurant);
  I.click(favoriteRestaurant);

  I.seeElement('#fav-btn');
  I.click('#fav-btn');

  I.amOnPage('/#/favorite');

  I.seeElement('.card h3');
  const favoritedRestaurantName = await I.grabTextFrom('.card h3');

  assert.strictEqual(favoriteRestaurantName, favoritedRestaurantName);

  I.seeElement('.card h3');
  const UnfavoritedRestaurant = locate('.card h3').first();
  await I.grabTextFrom(UnfavoritedRestaurant);
  I.click(UnfavoritedRestaurant);

  I.seeElement('#fav-btn');
  I.click('#fav-btn');

  I.amOnPage('/#/favorite');
  I.see("Oops, sorry, you don't have any favorite restaurants yet", '.fav-container > h3');
});
