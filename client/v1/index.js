<<<<<<< HEAD
// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'adresse',
  'url': 'https://adresse.paris/'
}];




/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
var cheapteeshirtlink='https://www.loom.fr/collections/tous-les-vetements/products/le-t-shirt';
// 2. Log the variable

console.log(cheapteeshirtlink)

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
//var numberofproduct= data.marketplace.length;
var marketplacelen =marketplace.length;
// 2. Log the variable
console.log(marketplacelen);



// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
const brandsName=[]
for (let i=0;i<marketplacelen;i++){
  if (! brandsName.includes(marketplace[i].brand)){
    brandsName.push(marketplace[i].brand);
  }
}
// 2. Log the variable
console.log(brandsName);
// 3. Log how many brands we have
console.log(brandsName.length);


// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable
function compare(a, b) {
  return a.price - b.price;
}
var marketplacesort=marketplace;
marketplacesort.sort(compare);


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
console.log(marketplace.map(product => product.date))

function comparedate(a,b){
  x = new Date(a.date);
  y = new Date(b.date);
  return x>y ? -1 : x<y ? 1 : 0
}
var marketplacedate=marketplace
marketplacedate.sort(comparedate);
console.log(marketplacedate)


// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
marketplace50100=[];
for (var i =0;i<marketplace.length;i++){
  if (marketplace[i].price>=50 && marketplace[i].price<100){
    marketplace50100.push(marketplace[i])
  }
}
console.log(marketplace50100)


// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
pricetab=marketplace.map(product=>product.price)
var avg=0
for (var i=0;i<pricetab.length;i++){
  avg+=pricetab[i]
}
avg=avg/pricetab.length
// 2. Log the average
console.log(avg)

/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
const brands ={}
for (var i =0;i<marketplace.length;i++){
  if (marketplace[i].brand in brands){
    brands[marketplace[i].brand].push(marketplace[i])
  }
  else {
    brands[marketplace[i].brand]=[marketplace[i]]
  }
}
//
// 2. Log the variable
console.log(brands);
// 3. Log the number of products by brands
listbrands=Object.keys(brands)
for (var i =0;i<listbrands.length;i++){
  br=listbrands[i]
  console.log(br)
  value =brands[br]
  console.log(value.length)
}


// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
function compareinverse(a, b) {
  return -a.price + b.price;
}
brandssort=brands;
for (var i =0;i<listbrands.length;i++){
  brandssort[listbrands[i]].sort(compareinverse);
}
// 2. Log the sort
console.log(brandssort);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
function comparedateinverse(a,b){
  x = new Date(a.date);
  y = new Date(b.date);
  return x>y ? 1 : x<y ? -1 : 0
}

brandssortdate=brands;
for (var i =0;i<listbrands.length;i++){
  brandssortdate[listbrands[i]].sort(comparedateinverse);
}
// 2. Log the sort

console.log(brandssortdate)



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

p90index=Math.round(marketplacesort.length/10)
p90=marketplacesort[p90index].price
console.log(p90)


/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
function newproduct(listproduct){
  for (var i=0;i<listproduct.length;i++){7
    x=new Date (listproduct[i].released)
    var twoweek = new Date ("2022-01-04")
      if (x<twoweek){
        return false
      }
  }
  return true
}

answer =newproduct(COTELE_PARIS);
console.log(answer)


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

function reasonable(listproduct){
  for (var i=0;i<listproduct.length;i++){7
    x=listproduct[i].price;
      if (x>100){
        return false
      }
  }
  return true
}
answer = reasonable(COTELE_PARIS)
console.log (answer)



// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

for (var i=0;i<COTELE_PARIS.length;i++){
  if (COTELE_PARIS[i].uuid==`b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    find=COTELE_PARIS[i]
  }
}
console.log(find)


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
for (var i=0;i<COTELE_PARIS.length;i++){
  if (COTELE_PARIS[i].uuid==`b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    delete COTELE_PARIS[i]
  }
}
// 2. Log the new list of product

console.log(COTELE_PARIS)

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
console.log(blueJacket)
console.log(jacket)

// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties
jacket.favorite = true;


/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
=======
// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'adresse',
  'url': 'https://adresse.paris/'
}];




/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
var cheapteeshirtlink='https://www.loom.fr/collections/tous-les-vetements/products/le-t-shirt';
// 2. Log the variable

console.log(cheapteeshirtlink)

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
//var numberofproduct= data.marketplace.length;
var marketplacelen =marketplace.length;
// 2. Log the variable
console.log(marketplacelen);



// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
const brandsName=[]
for (let i=0;i<marketplacelen;i++){
  if (! brandsName.includes(marketplace[i].brand)){
    brandsName.push(marketplace[i].brand);
  }
}
// 2. Log the variable
console.log(brandsName);
// 3. Log how many brands we have
console.log(brandsName.length);


// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable
function compare(a, b) {
  return a.price - b.price;
}
var marketplacesort=marketplace;
marketplacesort.sort(compare);


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
console.log(marketplace.map(product => product.date))

function comparedate(a,b){
  x = new Date(a.date);
  y = new Date(b.date);
  return x>y ? -1 : x<y ? 1 : 0
}
var marketplacedate=marketplace
marketplacedate.sort(comparedate);
console.log(marketplacedate)


// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
marketplace50100=[];
for (var i =0;i<marketplace.length;i++){
  if (marketplace[i].price>=50 && marketplace[i].price<100){
    marketplace50100.push(marketplace[i])
  }
}
console.log(marketplace50100)


// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
pricetab=marketplace.map(product=>product.price)
var avg=0
for (var i=0;i<pricetab.length;i++){
  avg+=pricetab[i]
}
avg=avg/pricetab.length
// 2. Log the average
console.log(avg)

/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
const brands ={}
for (var i =0;i<marketplace.length;i++){
  if (marketplace[i].brand in brands){
    brands[marketplace[i].brand].push(marketplace[i])
  }
  else {
    brands[marketplace[i].brand]=[marketplace[i]]
  }
}
//
// 2. Log the variable
console.log(brands);
// 3. Log the number of products by brands
listbrands=Object.keys(brands)
for (var i =0;i<listbrands.length;i++){
  br=listbrands[i]
  console.log(br)
  value =brands[br]
  console.log(value.length)
}


// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
function compareinverse(a, b) {
  return -a.price + b.price;
}
brandssort=brands;
for (var i =0;i<listbrands.length;i++){
  brandssort[listbrands[i]].sort(compareinverse);
}
// 2. Log the sort
console.log(brandssort);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
function comparedateinverse(a,b){
  x = new Date(a.date);
  y = new Date(b.date);
  return x>y ? 1 : x<y ? -1 : 0
}

brandssortdate=brands;
for (var i =0;i<listbrands.length;i++){
  brandssortdate[listbrands[i]].sort(comparedateinverse);
}
// 2. Log the sort

console.log(brandssortdate)



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

p90index=Math.round(marketplacesort.length/10)
p90=marketplacesort[p90index].price
console.log(p90)


/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
function newproduct(listproduct){
  for (var i=0;i<listproduct.length;i++){7
    x=new Date (listproduct[i].released)
    var twoweek = new Date ("2022-01-04")
      if (x<twoweek){
        return false
      }
  }
  return true
}

answer =newproduct(COTELE_PARIS);
console.log(answer)


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

function reasonable(listproduct){
  for (var i=0;i<listproduct.length;i++){7
    x=listproduct[i].price;
      if (x>100){
        return false
      }
  }
  return true
}
answer = reasonable(COTELE_PARIS)
console.log (answer)



// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

for (var i=0;i<COTELE_PARIS.length;i++){
  if (COTELE_PARIS[i].uuid==`b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    find=COTELE_PARIS[i]
  }
}
console.log(find)


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
for (var i=0;i<COTELE_PARIS.length;i++){
  if (COTELE_PARIS[i].uuid==`b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    delete COTELE_PARIS[i]
  }
}
// 2. Log the new list of product

console.log(COTELE_PARIS)

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
console.log(blueJacket)
console.log(jacket)

// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties
jacket.favorite = true;


/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
>>>>>>> 04ce442e5622e4aaf44f9179a30387decc605272
