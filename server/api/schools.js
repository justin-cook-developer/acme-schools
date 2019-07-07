const express = require('express');
const router = express.Router();
const { School } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const school = await School.findByPk(req.params.id);
    res.json(school);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
