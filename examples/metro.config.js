const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require("path");
const exclusionList = require("metro-config/src/defaults/exclusionList");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
    blacklistRE: exclusionList([/\/pinar\/node_modules\/react-native\/.*/]),
    extraNodeModules: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-native": path.resolve(__dirname, "node_modules/react-native"),
    },
  },
  /**
   * Add our workspace roots so that react native can find the source code for the included packages
   * in the monorepo
   */
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, "../src"),
    path.resolve(__dirname, "../node_modules"),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
