const { model, Schema } = require('mongoose');

const productsSchema = new Schema({
  name: String,
  manufacter: String,
  color: String,
  price: Number
});

const Product = model('Product', productsSchema);

module.exports = Product;