/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path");
const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    blacklistRE: blacklist([/\/pinar\/node_modules\/react-native\/.*/]),
    extraNodeModules: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-native": path.resolve(__dirname, "node_modules/react-native")
    }
  },
  /**
   * Add our workspace roots so that react native can find the source code for the included packages
   * in the monorepo
   */
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, "../src"),
    path.resolve(__dirname, "../node_modules")
  ]
};
