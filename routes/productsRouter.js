const router = require('express').Router();
const products = require('../services/productsService');
const getManufacturers = require('../services/manufacturersService');

router.get('/all', async (req, res, next) => {
  try {
    const result = await products.getProducts();
    res.json({ result }).status(200).end();
  } catch (err) {
    next(err);
  }
});

router.get('/manufacturers', async (req, res, next) => {
  try {
    const result = await getManufacturers();
    res.json({ result }).status(200).end();
  } catch (err) {
    next(err);
  }
});

router.get('/search/:brand', async (req, res, next) => {
  try {
    const result = await products.getProductsByBrand(req.params.brand);
    res.json({ result }).status(200);
  } catch (err) {
    next(err);
  }
});

router.get('/search/:brand/:color', async (req, res, next) => {
  try {
    const result = await products.getProductsByBrandColor(req.params.brand, req.params.color);
    res.json({ result }).status(200);
  } catch (err) {
    next(err);
  }
});

router.get('/search/:brand/:color/:price', async (req, res, next) => {
  try {
    const result = await products.getProductsByBrandColorPrice(req.params.brand, req.params.color, req.params.price);
    console.log('eiiii')
    res.json({ result }).status(200);
  } catch (err) {
    next(err);
  }
});

router.get('/search', async (req, res) => {
  const { brand, color, price } = req.query;
  const result = await (
    brand && color && price
      ? products.getProductsByBrandColorPrice(brand, color, price)
      : brand && color && !price
        ? products.getProductsByBrandColor(brand, color)
        : brand && !color && price
          ? products.getProductsByBrandPrice(brand, price)
          : !brand && color && price
            ? products.getProductsByColorPrice(color, price)
            : !brand && !color && price
              ? products.getProductsByPrice(price)
              : !brand && color && !price
                ? products.getProductsByColor(color)
                : products.getProductsByBrand(brand));

  result.length > 0
    ? res.json({ result }).status(200).end()
    : res.json({ error: 'No existen resultados' }).status(404).end();
});

module.exports = router;