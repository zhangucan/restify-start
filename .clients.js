const DotEnv = require('dotenv')

const clients = {
  'development': {
      'apiSecret': 'developmentXYZ!@#$%&*987654123'
    , 'dbHost': `mongodb://admin:admin@47.105.47.65:27017/${process.env.SERVER_NAME}-development?authSource=admin`
    , 'status': true
  }
  , 'production': {
      'apiSecret': 'production*&&&*&*&@!@!!987654123'
    , 'dbHost': `mongodb://admin:admin@47.105.47.65:27017/${process.env.SERVER_NAME}-production?authSource=admin`
    , 'status': true
  }
}

module.exports = clients
