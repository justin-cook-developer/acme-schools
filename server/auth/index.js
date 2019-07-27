const router = require('express').Router();
const { User } = require('../db/index');

router.get('/me', (req, res, next) => {
  if (req.user) {
    const user = req.user;
    res.json(user);
  } else {
    res.redirect('/#/login');
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    req.session.userId = user.id;
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    req.session.userId = user.id;
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
