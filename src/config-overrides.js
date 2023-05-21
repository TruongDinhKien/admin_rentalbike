import { alias, configPaths } from 'react-app-rewire-alias'

module.exports = function override(config) {
  return alias(configPaths('./tsconfig.paths.json'))(config)
}
