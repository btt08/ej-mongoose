const Product = require('../models/Product');

const getAllProducts = async () => {
  return formatResponse(await Product.find({}).populate('manufacturer._id').exec());
};

const filterProducts = async (brand, color, price, manufacturer) => {
  const filter = {};
  brand ? filter.name = new RegExp(brand, 'i') : null;
  color ? filter.color = color : null;
  price ? filter.price = { '$lt': price } : null;
  const product = await Product.find(filter).populate('manufacturer._id').exec();
  return manufacturer ?
    formatResponse(product)
      .filter(elem => elem.manufacturer.cif === manufacturer) :
    formatResponse(product);
};

function formatResponse(res) {
  let formatedRes = null;
  if (Array.isArray(res)) {
    formatedRes = res.map(elem => (
      {
        ...elem._doc,
        manufacturer: {
          ...elem._doc.manufacturer._id._doc
        }
      }
    ));
  } else {
    formatedRes = [{
      ...res._doc,
      manufacturer: {
        ...res._doc.manufacturer._id._doc
      }
    }];
  }
  return formatedRes;
}

module.exports = {
  getAllProducts,
  filterProducts
};