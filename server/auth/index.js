const router = require('express').Router();

router.get('/me', (req, res, next) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.redirect('/#/login');
  }
});

module.exports = router;
