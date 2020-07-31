const rewireAliases = require("react-app-rewire-aliases");
const {paths} = require("react-app-rewired");
const path = require("path");

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    "@screens": path.resolve(__dirname, `${paths.appSrc}/screens/`),
    "@context": path.resolve(__dirname, `${paths.appSrc}/context/`),
    "@hooks": path.resolve(__dirname, `${paths.appSrc}/hooks/`),
  })(config, env);

  return config;
};
