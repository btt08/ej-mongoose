require('./modules/mongo.js');
const Product = require('./models/Product.js');
const Manufacturer = require('./models/Manufacturer.js');
const products = require('./modules/products');
const manufacturers = require('./modules/manufacturers');

const createdb = async (resquest, response) => {
  await Product.deleteMany({});
  await Manufacturer.deleteMany({});

  const newManufacturers = await Manufacturer.insertMany(manufacturers);
  const newProducts = products.map(product => {
    const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.cif === product.manufacturer)[0];
    const { _id, name } = manufacturer;
    return {
      ...product,
      manufacturer: { _id, name }
    }
  });
  await Product.insertMany(newProducts);
};

createdb();