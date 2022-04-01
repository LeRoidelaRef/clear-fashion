// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

// current products on the page
let currentProducts = [];
let currentPagination = {};

// instantiate the selectors
const selectShow = document.querySelector('#show-select');
const selectPage = document.querySelector('#page-select');
const selectBrands = document.querySelector('#brand-select')
const selectShort = document.querySelector('#sort-select')
const selectFilters = document.querySelector('#filters-select')
const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');

/**
 * Set global value
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({result, meta}) => {
  currentProducts = result;
  currentPagination = meta;
};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
const fetchProducts = async (page = 1, size = 12) => {
  try {
    const response = await fetch(
      `https://clear-fashion2-zeta.vercel.app/products/search?page=${page}&size=${size}`
    );
    const body = await response.json();

    if (body.success !== true) {
      console.error(body);
      return {currentProducts, currentPagination};
    }

    return body.data;
  } catch (error) {
    console.error(error);
    return {currentProducts, currentPagination};
  }
};

/**
 * Render list of products
 * @param  {Array} products
 */
const renderProducts = products => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  const template = products
    .map(product => {
      return `
      <div class="product" id=${product.uuid}>
        <span>${product.brand}</span>
        <a href="${product.link}">${product.name}</a>
        <span>${product.price}</span>
      </div>
    `;
    })
    .join('');

  div.innerHTML = template;
  fragment.appendChild(div);
  sectionProducts.innerHTML = '<h2>Products</h2>';
  sectionProducts.appendChild(fragment);
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderPagination = pagination => {
  const {currentPage, pageCount} = pagination;
  const options = Array.from(
    {'length': pageCount},
    (value, index) => `<option value="${index + 1}">${index + 1}</option>`
  ).join('');

  selectPage.innerHTML = options;
  selectPage.selectedIndex = currentPage - 1;
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderIndicators = pagination => {
  const {count} = pagination;

  spanNbProducts.innerHTML = count;
};

const render = (products, pagination) => {
  renderProducts(products);
  renderPagination(pagination);
  renderIndicators(pagination);
};

/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 */
selectShow.addEventListener('change', async (event) => {
  const products = await fetchProducts(currentPagination.currentPage, parseInt(event.target.value));

  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});

document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();

  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});

// Feature 1
selectPage.addEventListener('change', async(event) => {
  fetchProducts(parseInt(event.target.value),currentPagination.pageSize)
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});


// Feature 2
selectBrands.addEventListener('change',async(event)=>
{
  const products = await fetchProducts(currentPagination.currentPage, currentPagination.pageSize);
  if (event.target.value == "all"){
}
else{
  products.result = products.result.filter(product => product.brand == event.target.value);
}
setCurrentProducts(products);
render(currentProducts, currentPagination);
})

// Features 3&4

function comparedate(released){
  var a=new Date('2022-01-17')
  var b=new Date (released)
  return a-b
}

selectFilters.addEventListener('change',async(event) => {

  const products = await fetchProducts(currentPagination.currentPage, currentPagination.pageSize);

  if (event.target.value == "Reasonable Price"){
    products.result = products.result.filter(product => product.price <= 50);
  }
  if (event.target.value == "Recently Released"){
    products.result = products.result.filter(product => comparedate(product.released) <= 0)
  }

  setCurrentProducts(products);
  render(currentProducts,currentPagination)
})

// Features 5&6
function compareprice(a,b){
  return a.price-b.price
}
function comparedate2(a,b){
  a.released=new Date(a.released)
  b.released=new Date(b.released)
  return a.released-b.released
}

selectShort.addEventListener('change',async(event)=>{
  console.log(event.target.value)
  const products = await fetchProducts(currentPagination.currentPage, currentPagination.pageSize);
  if (event.target.value == 'price-asc'){
    products.result=products.result.sort(compareprice)
  }
  if (event.target.value == 'price-desc'){
    products.result=products.result.sort(compareprice).reverse()
  }
  if (event.target.value == 'date-asc'){
    products.result=products.result.sort(comparedate2)
  }
  if (event.target.value == 'date-desc'){
    products.result=products.result.sort(comparedate2).reverse()
  }
  
  setCurrentProducts(products);
  render(currentProducts,currentPagination)

})


