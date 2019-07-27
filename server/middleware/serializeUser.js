const { User } = require('../db/index');

const middleware = async (req, res, next) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      req.user = user;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = middleware;
