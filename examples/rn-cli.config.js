const path = require("path");

module.exports = {
  resolver: {
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
