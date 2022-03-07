const fetch = require('node-fetch');
const cheerio = require('cheerio');
const {'v5': uuidv5} = require('uuid');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  return $('.product-container').map((i, element) => {
    const link = `${$(element).find('.product_img_link').attr('href')}`;
      return {
        'link' : link,
        'brand': 'adresse',
        'price': parseInt($(element).find('.price.product-price').text()),
        'name': $(element).find('.product-name').attr('title'),
        'photo': $(element).find('img').attr('src'),
      };
    })
    .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const body = await response.text();

      return parse(body);
    }

    console.error(response);

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};