//module.exports = require('./config/karma.conf.js');
require('babel-core/register');
module.exports = require('./config/karma.conf.js').default;

