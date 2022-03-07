<<<<<<< HEAD
 /* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const montlimart =require('./sources/montlimart')
const adresse = require('./sources/AdresseParis')
const fs = require('fs')

async function sandbox (eshop) {
  try {
    let productsd = [];
    for(var i = 1;i<=11;i++)
    {
      eshop ='https://www.dedicatedbrand.com/en/men/all-men?p='+i.toString();
      console.log(`🕵️‍♀️  browsing ${eshop} source`);
      const products_dedi = await dedicatedbrand.scrape(eshop);
      productsd = productsd.concat(products_dedi);
    }
    
    let productsm=[];
    for(var i =1;i<=7;i++)
    {
      eshop ='https://www.montlimart.com/toute-la-collection.html?p='+i.toString();
      console.log(`🕵️‍♀️  browsing ${eshop} source`);
      const products_mont = await montlimart.scrape(eshop);
      productsm = productsm.concat(products_mont);
    }

    eshop ='https://adresse.paris/630-toute-la-collection'
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    const productsa = await adresse.scrape('https://adresse.paris/630-toute-la-collection');
    console.log(productsd.length)
    console.log(productsm.length)
    console.log(productsa.length)

    

    products=[].concat(productsd,productsm,productsa)

    final=[]
    for (let i =0;i<products.length;i++){
      if (products[i].price!="NaN"){
        final.push(products[i])
      }
    }

    fs.writeFileSync('products'+'.json',JSON.stringify(products))
    console.log('done')
    process.exit(0);
    
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

}

const [,, eshop] = process.argv;

sandbox(eshop);
=======
 /* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const montlimart =require('./sources/montlimart')
const adresse = require('./sources/AdresseParis')
const fs = require('fs')

async function sandbox (eshop) {
  try {
    eshop ='https://www.dedicatedbrand.com/en/men/all-men'
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    const productsd = await dedicatedbrand.scrape('https://www.dedicatedbrand.com/en/men/all-men');
    
    eshop ='https://www.montlimart.com/toute-la-collection.html'
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    const productsm = await montlimart.scrape('https://www.montlimart.com/toute-la-collection.html');
    
    eshop ='https://adresse.paris/630-toute-la-collection'
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    const productsa = await adresse.scrape('https://adresse.paris/630-toute-la-collection');
    console.log(productsd.length)
    console.log(productsm.length)
    console.log(productsa.length)

    

    products=[].concat(productsd,productsm,productsa)

    final=[]
    for (let i =0;i<products.length;i++){
      if (products[i].price!="NaN"){
        final.push(products[i])
      }
    }

    fs.writeFileSync('products'+'.json',JSON.stringify(products))
    console.log('done')
    process.exit(0);
    
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

}

const [,, eshop] = process.argv;

sandbox(eshop);
>>>>>>> 04ce442e5622e4aaf44f9179a30387decc605272
