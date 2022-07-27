const Product = require('../models/Product');

const getProducts = async () => {
  return await Product.find({}).exec();
};

const getProductsByBrandColorPrice = async (brand, color, price) => {
  return await Product.find(
    {
      'name': new RegExp(brand, 'i'),
      'color': color,
      'price': { '$lt': price }
    }).exec();
};

const getProductsByBrandColor = async (brand, color) => {
  return await Product.find(
    {
      'name': new RegExp(brand, 'i'),
      'color': color
    }).exec();
};

const getProductsByBrandPrice = async (brand, price) => {
  return await Product.find(
    {
      'name': new RegExp(brand, 'i'),
      'price': { '$lt': price }
    }).exec();
};

const getProductsByColorPrice = async (color, price) => {
  return await Product.find(
    {
      'color': color,
      'price': { '$lt': price }
    }).exec();
};

const getProductsByPrice = async (price) => {
  return await Product.find(
    {
      'price': { '$lt': price }
    }).exec();
};

const getProductsByColor = async (color) => {
  return await Product.find(
    {
      'color': color,
    }).exec();
};

const getProductsByBrand = async (brand) => {
  return await Product.find(
    {
      'name': new RegExp(brand, 'i')
    }).exec();
};

module.exports = {
  getProducts,
  getProductsByBrandColorPrice,
  getProductsByBrandColor,
  getProductsByBrandPrice,
  getProductsByColorPrice,
  getProductsByPrice,
  getProductsByColor,
  getProductsByBrand,
};