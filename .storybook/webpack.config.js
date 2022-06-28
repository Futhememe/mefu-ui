const path = require("path")

module.exports = ({ config }) => {
  config.resolve.alias = {
    "@date-utils": path.resolve(__dirname, "..", "packages", "utils", "date")
  }

  return config
}