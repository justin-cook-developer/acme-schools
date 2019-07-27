const Sequelize = require('sequelize');
const { connection, Model } = require('./connection');
const bcrypt = require('bcryptjs');

class User extends Model {}
User.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'user',
  }
);

User.hash = password => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 12, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

User.beforeCreate(async instance => {
  const hashed = await User.hash(instance.password);
  instance.password = hashed;
  return instance;
});

User.beforeUpdate(async instance => {
  if (instance.changed().includes('password')) {
    const hashed = await User.hash(instance.password);
    instance.password = hashed;
  }
  return instance;
});

User.comparePasswords = (inputStr, pass) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(inputStr, pass, (err, success) => {
      if (success) {
        resolve(true);
      } else if (err) {
        err.status = 401;
        reject(err);
      }
    });
  });
};

User.login = async function(email, inputPass) {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const error = new Error('No user with that email.');
      error.status = 401;
      throw error;
    }
    await User.comparePasswords(inputPass, user.password);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = User;
