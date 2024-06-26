/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavorite a Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorited restaurant', ({ I }) => {
  I.dontSee('.content');
});

Scenario('Unfavorite a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card a');
  const favoriteRestaurantName = await I.grabTextFrom('.card h3');
  I.click(locate('.card a').first());

  I.seeElement('#fav-btn');
  I.click('#fav-btn');

  I.amOnPage('/#/favorite');

  I.seeElement('.card h3');
  const favoritedRestaurantName = await I.grabTextFrom('.card h3');

  assert.strictEqual(favoriteRestaurantName, favoritedRestaurantName);

  I.seeElement('.card a');
  const UnfavoritedRestaurant = locate('.card a').first();
  await I.grabTextFrom(UnfavoritedRestaurant);
  I.click(UnfavoritedRestaurant);

  I.seeElement('#fav-btn');
  I.click('#fav-btn');

  I.amOnPage('/#/favorite');
  I.dontSee('.content');
});
