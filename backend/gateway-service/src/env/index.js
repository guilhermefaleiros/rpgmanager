const PROD_ENV = {}

const DEV_ENV = {
  SIGN_SERVER: 'http://localhost:3001',
}

module.exports = process.env.NODE_ENV === 'development' ? DEV_ENV : PROD_ENV
