const fetch = require('node-fetch');
const cheerio = require('cheerio');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 */
const parse = data => {
  const $ = cheerio.load(data);

  return $('.productList-container .productList')
    .map((i, element) => {
      const link = `https://www.dedicatedbrand.com${$(element)
    .find('.productList-link')
    .attr('href')}`;
  

  return {
    'link': link,
    'brand': 'dedicated',
    'price': parseInt(
      $(element)
        .find('.productList-price')
        .text()
    ),
    'name': $(element)
      .find('.productList-title')
      .text()
      .trim()
      .replace(/\s/g, ' '),
    'photo': $(element)
    .find('.productList-image img')
    .attr('data-src'),
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
      const nbpage=Math.ceil(result[0]["nbProduct"] / result[0]["nbCurrent"])
      let total=[]
      for (let i =1;i<=nbpage;i++){
        const url1= 'https://www.dedicatedbrand.com/en/men/all-men?p='+i.toString();
        const reponse1= await fetch(url1);
        if (reponse1.ok){
          const body1 =await reponse1.text()
          total= total.concat(parse1(body))
        }
      }
      return total;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};