const { model, Schema } = require('mongoose');

const productsSchema = new Schema({
  name: String,
  color: String,
  price: Number,
  manufacturer: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Manufacturer'
    }
  }
});

const Product = model('Product', productsSchema);

module.exports = Product;