// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

module.exports = withCSS(withTypescript({
  webpack(config, options) {
    const env = { API_KEY: JSON.stringify(process.env.SHOPIFY_API_KEY) };

    config.plugins.push(new webpack.DefinePlugin(env));
    return config
  }
}))
