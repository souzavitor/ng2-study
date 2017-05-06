if (!(process.env.WEBPACK_ENV === 'production')) {
  module.exports = require('./config/webpack.dev.js');
} else {
  module.exports = require('./config/webpack.prod.js');
}
