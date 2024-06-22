/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite a Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorited restaurant', ({ I }) => {
  I.waitForElement('.fav-container');
  I.see("Oops, sorry, you don't have any favorite restaurants yet", '.fav-container');
});

Scenario('Favorite a restaurant', async ({ I }) => {
  I.see("Oops, sorry, you don't have any favorite restaurants yet", '.fav-container');

  I.amOnPage('/');

  I.seeElement('.card h3');
  const firstRestaurant = locate('.card h3').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#fav-btn');
  I.click('#fav-btn');

  I.amOnPage('/#/favorite');
  I.seeElement('.card h3');
  const favoritedRestaurantName = await I.grabTextFrom('.card h3');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
