const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "metadrones",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: {
          type: "module",
        },
        name: "@central-factory/metadrones",
        filename: "remoteEntry.js",
        exposes: {
          './Module': './apps/metadrones/src/app/metadrones.module.ts',
        },

        // For remotes (please adjust)
        // name: "metadrones",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './apps/metadrones/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        // remotes: {
        //     "codex": "http://localhost:3000/remoteEntry.js",
        //     "gatekeeper": "http://localhost:4200/remoteEntry.js",
        //     "inventory": "http://localhost:4200/remoteEntry.js",
        //     "manageAvatars": "http://localhost:4200/remoteEntry.js",
        //     "marketplace": "http://localhost:4200/remoteEntry.js",
        //     "player": "http://localhost:4200/remoteEntry.js",
        //     "portal": "http://localhost:5000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '~13.1.0' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
