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
    if (error.type === 'Auth') {
      return res
        .status(401)
        .json({ errors: { [error.subtype]: error.message } });
    }
    next(error);
  }
});

router.delete('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        next(err);
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
