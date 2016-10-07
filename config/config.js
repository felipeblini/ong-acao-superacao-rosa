var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'superacaorosa-express-grunt'
    },
    port: 3000,
    db: 'mongodb://localhost/superacaorosa-express-grunt-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'superacaorosa-express-grunt'
    },
    port: 3000,
    db: 'mongodb://localhost/superacaorosa-express-grunt-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'superacaorosa-express-grunt'
    },
    port: 3000,
    db: 'mongodb://localhost/superacaorosa-express-grunt-production'
  }
};

module.exports = config[env];
