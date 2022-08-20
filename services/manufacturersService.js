const Manufacturer = require('../models/Manufacturer.js');

const getAllManufacturers = async () => {
  return await Manufacturer.find({}).exec();
}

module.exports = getAllManufacturers;