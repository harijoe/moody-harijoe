const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    auth0: {
      clientId: 'xKgnHyMTVuWZjGV4kULMkWg3GOfrUJk0',
      domain: 'whereru.eu.auth0.com',
    },
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(config.all, config[config.all.env])
