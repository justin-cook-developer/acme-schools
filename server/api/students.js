const express = require('express');
const router = express.Router();
const { Student } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [_, [student]] = await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Student.destroy({ where: { id } });
    res.json({
      msg: `A student with the id (${id}) was deleted`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
