//module.exports = require('./config/webpack.dev.js');
'use strict';
import Config, { environment } from 'webpack-config';

environment.setAll({
        env: () => process.env.NODE_ENV || 'development'
});

export default new Config().extend('./config/webpack.[env].js');