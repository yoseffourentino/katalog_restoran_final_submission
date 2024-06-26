/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite a Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorited restaurant', ({ I }) => {
  I.waitForElement('.fav-container');
  I.dontSee('.content');
});

Scenario('Favorite a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card a');
  const firstRestaurantName = await I.grabTextFrom('.card h3');
  I.click(locate('.card a').first());

  I.seeElement('#fav-btn');
  I.click('#fav-btn');

  I.amOnPage('/#/favorite');
  I.seeElement('.card h3');
  const favoritedRestaurantName = await I.grabTextFrom('.card h3');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
