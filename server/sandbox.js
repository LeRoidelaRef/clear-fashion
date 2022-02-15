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
