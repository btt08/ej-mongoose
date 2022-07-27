const Manufacturer = require('../models/Manufacturer.js');

const getManufacturers = async () => {
  return await Manufacturer.find({}).exec();
}

module.exports = getManufacturers;