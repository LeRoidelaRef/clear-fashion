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

  return $('.item').map((i, element) => {
    const link = $(element).find('.product-info h2.product-name').attr('href')

      return {
        'link' : link,
        'brand': 'montlimart',
        'price': parseInt($(element).find('price').text()),
        'name': $(element).find('.product-name').attr('title').text().trim().replace(/\s/g, ' '),
        'photo': $(element).find('.productList-image').attr('src'),
        '_id': 0,// a trouver
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