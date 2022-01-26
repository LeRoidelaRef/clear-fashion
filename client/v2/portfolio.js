// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

// current products on the page
let currentProducts = [];
let currentPagination = {};

// inititiqte selectors
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
      `https://clear-fashion-api.vercel.app?page=${page}&size=${size}`
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
 * @type {[type]}
 */
selectShow.addEventListener('change', async (event) => {
  const products = await(fetchProducts(1, parseInt(event.target.value)));
  
    setCurrentProducts(products);
    render(currentProducts, currentPagination);
});

selectPage.addEventListener('change', event => {
  fetchProducts(parseInt(event.target.value),currentPagination.pageSize)
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});

selectBrands.addEventListener('change',event=>{
  const products = fetchProducts(currentPagination.pageCount,currentPagination$.pageSize);
  setCurrentProducts(products);
  prodbrands=[];
  for (var i=0;i<currentProducts.length;i++){
    if (currentProducts[i].brands==selectBrands.value || selectBrands.value=='all'){
      prodbrands.push(currentProducts[i]);
    }
  }
  render(prodbrands,currentPagination);

})

selectFilters.addEventListener('change',event => {
  const products = fetchProducts(currentPagination.pageCount,currentPagination$.pageSize);
  setCurrentProducts(products);
  prodsfilter=[]
  for (var i=0;i<currentProducts.length;i++){
    if (selectFilters.value=='Reasonable price' && currentProducts[i].price<50){
      probfilter.push(currentProducts[i])
    }
    if (selectFilters="Recently Released" && new Date(currentProducts[i].date)< new date('2022-01-17')){
      probfilter.push(currentProducts[i])
    }
  }
  render(prodsfilter,currentPagination)

  
})


document.addEventListener('DOMContentLoaded', () =>
  fetchProducts()
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination))
);
