const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const metadronesUrl = process.env.METADRONES_URL || 'http://localhost:3000/remoteEntry.js';

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: '@central-factory/portal',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
    fallback: {
      'crypto': require.resolve('crypto-browserify'),
      'stream': require.resolve('stream-browserify'),
      'assert': require.resolve('assert'),
      'fs': require.resolve('browserfs'),
      'http': require.resolve('stream-http'),
      'https': require.resolve('https-browserify'),
      'net': require.resolve('net-websocket-polyfill'),
      'os': require.resolve('os-browserify'),
      'vm': require.resolve('vm-browserify'),
      'zlib': require.resolve('browserify-zlib'),
    },
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },

      // For remotes (please adjust)
      // name: 'portal',
      // filename: 'remoteEntry.js',
      // exposes: {
      //     './Component': './apps/portal/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      remotes: {
        '@central-factory/metadrones': metadronesUrl,
      },

      shared: share({
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
