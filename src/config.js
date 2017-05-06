const merge = require('lodash/merge')

const envConfigs = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    auth0: {
      clientId: 'xKgnHyMTVuWZjGV4kULMkWg3GOfrUJk0',
      domain: 'whereru.eu.auth0.com',
      redirectUrl: 'http://localhost:3000',
    },
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    auth0: {
      redirectUrl: 'https://gtest-c1715.firebaseapp.com',
    },
  },
}

const config = merge(envConfigs.all, envConfigs[envConfigs.all.env])

const serviceConfigs = {
  lockConfig: {
    clientId: config.auth0.clientId,
    domain: config.auth0.domain,
    config: {
      auth: {
        redirectUrl: config.auth0.redirectUrl,
        responseType: 'token',
        params: {
          scope: 'profile',
        },
      },
      closable: false,
    },
  }
}

// Necessary to have access to process.env variables at runtime (such as isDev)
module.exports = merge(config, serviceConfigs)
