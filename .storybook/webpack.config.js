const path = require("path")

module.exports = ({ config }) => {
  config.resolve.alias = {
    "@date-utils": path.resolve(__dirname, "..", "packages", "utils", "date")
  }

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  }

  return config
}